# Manual for the HyperMD component

For the proper display of the HyperMD component, following configurations are needed.

1. In [global.scss](global.scss), import the editor styles (**critical**, otherwise the editor won't show)
    ```scss
    @import "~codemirror/lib/codemirror.css"; //Must import this in order to use Codemirror/HyperMD
    @import '~hypermd/mode/hypermd.css';
    @import '~hypermd/theme/hypermd-light.css';
    ```
2. In [main.ts](main.ts), import the editor mode files and addons.
    ```typescript
    import 'codemirror/mode/javascript/javascript';
    import 'codemirror/mode/xml/xml';
    import 'codemirror/mode/markdown/markdown';
    import 'codemirror/mode/gfm/gfm';
    
    import 'hypermd/mode/hypermd';
    
    import 'hypermd/addon/hide-token';
    import 'hypermd/addon/cursor-debounce';
    import 'hypermd/addon/fold';
    import 'hypermd/addon/read-link';
    import 'hypermd/addon/click';
    import 'hypermd/addon/hover';
    import 'hypermd/addon/paste';
    import 'hypermd/addon/insert-file';
    import 'hypermd/addon/mode-loader';
    import 'hypermd/addon/table-align';
    ```
3. Reminder: don't forget to `switchToHyperMD(editor)` in the component itself
