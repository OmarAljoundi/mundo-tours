// import { create } from "zustand";
// import { useTransition, useEffect } from "react";

// interface TransitionStore {
//   isPending: boolean;
//   isInitialized: boolean;
//   startTransition: () => void;
// }

// export const useWrapperTransitionStore = create<TransitionStore>(() => ({
//   isPending: false,
//   isInitialized: false,
//   startTransition: () =>
//     console.warn(
//       "Page transition not initialized. Make sure to call useWrapperTransition in a parent component."
//     ),
// }));

// export function useWrapperTransition() {
//   const [isPending, startTransition] = useTransition();

//   useEffect(() => {
//     useWrapperTransitionStore.setState({ isPending });
//   }, [isPending]);

//   useEffect(() => {
//     const refresh = () => {
//       startTransition(() => {
//         router.refresh();
//       });
//     };

//     useTransitionStore.setState({
//       refresh,
//       isInitialized: true,
//     });

//     return () => {
//       // Cleanup when component unmounts
//       useTransitionStore.setState({
//         isInitialized: false,
//       });
//     };
//   }, [router, startTransition]);
// }
