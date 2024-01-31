import adapter from '@sveltejs/adapter-static';
import path from 'path';

export default {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null,
      prerender: {
        // This will prerender all pages
        default: true
      },
	  static: {
		  strict: false,
	  }
    }),
    files: {
      routes: path.resolve('src/routes')
    }
    // other configurations...
  }
};
