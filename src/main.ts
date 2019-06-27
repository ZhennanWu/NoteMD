import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// import 'codemirror/mode/javascript/javascript';
// import 'codemirror/mode/xml/xml';
// import 'codemirror/mode/markdown/markdown';
// import 'codemirror/mode/gfm/gfm';

// import 'hypermd/core';
// import 'hypermd/mode/hypermd';
//
// import 'hypermd/addon/hide-token';
// import 'hypermd/addon/cursor-debounce';
// import 'hypermd/addon/fold';
// import 'hypermd/addon/read-link';
// import 'hypermd/addon/click';
// import 'hypermd/addon/hover';
// import 'hypermd/addon/paste';
// import 'hypermd/addon/insert-file';
// import 'hypermd/addon/mode-loader';
// import 'hypermd/addon/table-align';


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
