
/** @type {import('next').NextConfig} */
declare interface nextConfigType {
	static typescript: {
	static ignoreBuildErrors: boolean;
	};

	static logging: {
	static fetches: {
		static fullUrl: boolean;
	};
	};

	static swcMinify: boolean;

	static images: {
	static remotePatterns: ({	} | any)[];
	};

	static staticPageGenerationTimeout: number;
}
