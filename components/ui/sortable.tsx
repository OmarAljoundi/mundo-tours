"use client";

import * as React from "react";
import type {
  DndContextProps,
  DraggableSyntheticListeners,
  DropAnimation,
  UniqueIdentifier,
} from "@dnd-kit/core";
import {
  closestCenter,
  defaultDropAnimationSideEffects,
  DndContext,
  DragOverlay,
  KeyboardSensor,
  MouseSensor,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  restrictToHorizontalAxis,
  restrictToParentElement,
  restrictToVerticalAxis,
} from "@dnd-kit/modifiers";
import {
  arrayMove,
  horizontalListSortingStrategy,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
  type SortableContextProps,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Slot, type SlotProps } from "@radix-ui/react-slot";

import { composeRefs } from "@/hooks/compose-refs";
import { cn } from "@/lib/utils";
import { Button, type ButtonProps } from "@/components/ui/button";

const orientationConfig = {
  vertical: {
    modifiers: [restrictToVerticalAxis, restrictToParentElement],
    strategy: verticalListSortingStrategy,
  },
  horizontal: {
    modifiers: [restrictToHorizontalAxis, restrictToParentElement],
    strategy: horizontalListSortingStrategy,
  },
  mixed: {
    modifiers: [restrictToParentElement],
    strategy: undefined,
  },
};

interface SortableProps<TData> extends DndContextProps {
  value: TData[];
  onValueChange?: (items: TData[]) => void;
  uniqueId: keyof TData;
  onMove?: (event: { activeIndex: number; overIndex: number }) => void;
  collisionDetection?: DndContextProps["collisionDetection"];
  modifiers?: DndContextProps["modifiers"];
  strategy?: SortableContextProps["strategy"];
  orientation?: "vertical" | "horizontal" | "mixed";
  overlay?: React.ReactNode | null;
}

function Sortable<TData>({
  value,
  onValueChange,
  collisionDetection = closestCenter,
  modifiers,
  strategy,
  onMove,
  orientation = "vertical",
  overlay,
  children,
  uniqueId,
  ...props
}: SortableProps<TData>) {
  const [activeId, setActiveId] = React.useState<UniqueIdentifier | null>(null);
  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor),
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  const config = orientationConfig[orientation];

  return (
    <DndContext
      {...props}
      modifiers={modifiers ?? config.modifiers}
      sensors={sensors}
      onDragStart={(event) => {
        const { active } = event;
        setActiveId(active.id);
        if (props.onDragStart) props.onDragStart(event);
      }}
      onDragEnd={(event) => {
        const { active, over } = event;
        if (over && active.id !== over?.id) {
          const activeIndex = value.findIndex(
            (item) => item[uniqueId] === active.id
          );
          const overIndex = value.findIndex(
            (item) => item[uniqueId] === over.id
          );

          if (onMove) {
            onMove({ activeIndex, overIndex });
          } else {
            onValueChange?.(arrayMove(value, activeIndex, overIndex));
          }
        }
        setActiveId(null);
        if (props.onDragEnd) {
          props?.onDragEnd(event);
        }
      }}
      onDragCancel={() => setActiveId(null)}
      collisionDetection={collisionDetection}
    >
      <SortableContext
        items={(value || []).map((x) => x[uniqueId] as UniqueIdentifier)}
        strategy={strategy ?? config.strategy}
      >
        {children}
      </SortableContext>
      {overlay ? (
        <SortableOverlay activeId={activeId}>{overlay}</SortableOverlay>
      ) : null}
    </DndContext>
  );
}

const dropAnimationOpts: DropAnimation = {
  sideEffects: defaultDropAnimationSideEffects({
    styles: {
      active: {
        opacity: "0.4",
      },
    },
  }),
};

interface SortableOverlayProps
  extends React.ComponentPropsWithRef<typeof DragOverlay> {
  activeId?: UniqueIdentifier | null;
}

const SortableOverlay = React.forwardRef<HTMLDivElement, SortableOverlayProps>(
  (
    { activeId, dropAnimation = dropAnimationOpts, children, ...props },
    ref
  ) => {
    return (
      <DragOverlay dropAnimation={dropAnimation} {...props}>
        {activeId ? (
          <SortableItem
            ref={ref}
            value={activeId}
            className="cursor-grabbing"
            asChild
          >
            {children}
          </SortableItem>
        ) : null}
      </DragOverlay>
    );
  }
);
SortableOverlay.displayName = "SortableOverlay";

interface SortableItemContextProps {
  attributes: React.HTMLAttributes<HTMLElement>;
  listeners: DraggableSyntheticListeners | undefined;
  isDragging?: boolean;
}

const SortableItemContext = React.createContext<SortableItemContextProps>({
  attributes: {},
  listeners: undefined,
  isDragging: false,
});

function useSortableItem() {
  const context = React.useContext(SortableItemContext);

  if (!context) {
    throw new Error("useSortableItem must be used within a SortableItem");
  }

  return context;
}

interface SortableItemProps extends SlotProps {
  /**
   * The unique identifier of the item.
   * @example "item-1"
   * @type UniqueIdentifier
   */
  value: UniqueIdentifier;

  /**
   * Specifies whether the item should act as a trigger for the drag-and-drop action.
   * @default false
   * @type boolean | undefined
   */
  asTrigger?: boolean;

  /**
   * Merges the item's props into its immediate child.
   * @default false
   * @type boolean | undefined
   */
  asChild?: boolean;
}

const SortableItem = React.forwardRef<HTMLDivElement, SortableItemProps>(
  ({ value, asTrigger, asChild, className, ...props }, ref) => {
    const {
      attributes,
      listeners,
      setNodeRef,
      transform,
      transition,
      isDragging,
    } = useSortable({ id: value });

    const context = React.useMemo<SortableItemContextProps>(
      () => ({
        attributes,
        listeners,
        isDragging,
      }),
      [attributes, listeners, isDragging]
    );
    const style: React.CSSProperties = {
      opacity: isDragging ? 0.5 : 1,
      transform: CSS.Translate.toString(transform),
      transition,
    };

    const Comp = asChild ? Slot : "div";

    return (
      <SortableItemContext.Provider value={context}>
        <Comp
          data-state={isDragging ? "dragging" : undefined}
          className={cn(
            "data-[state=dragging]:cursor-grabbing",
            { "cursor-grab": !isDragging && asTrigger },
            className
          )}
          ref={composeRefs(ref, setNodeRef as React.Ref<HTMLDivElement>)}
          style={style}
          {...(asTrigger ? attributes : {})}
          {...(asTrigger ? listeners : {})}
          {...props}
        />
      </SortableItemContext.Provider>
    );
  }
);
SortableItem.displayName = "SortableItem";

interface SortableDragHandleProps extends ButtonProps {
  withHandle?: boolean;
}

const SortableDragHandle = React.forwardRef<
  HTMLButtonElement,
  SortableDragHandleProps
>(({ className, ...props }, ref) => {
  const { attributes, listeners, isDragging } = useSortableItem();

  return (
    <Button
      ref={composeRefs(ref)}
      data-state={isDragging ? "dragging" : undefined}
      className={cn(
        "cursor-grab data-[state=dragging]:cursor-grabbing",
        className
      )}
      {...attributes}
      {...listeners}
      {...props}
    />
  );
});
SortableDragHandle.displayName = "SortableDragHandle";

export { Sortable, SortableDragHandle, SortableItem, SortableOverlay };
