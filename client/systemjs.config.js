(function(global) {

  var ngVer     = '@2.0.0-rc.5';
  var routerVer = '@3.0.0-rc.1';

  var  map = {
    'app':                        './',

    '@angular':                   'node_modules/@angular', // sufficient if we didn't pin the version
    '@angular/router':            'node_modules/@angular/router',
    'rxjs':                       'node_modules/rxjs',
    'ts':                         'https://npmcdn.com/plugin-typescript@4.0.10/lib/plugin.js',
    'typescript':                 'node_modules/typescript/lib/typescript.js',
 };

  var packages = {
    'app':                        { main: 'main.ts',  defaultExtension: 'ts' },
    'rxjs':                       { main: 'index.js', defaultExtension: 'js' }
  };

  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'http',
    'forms',
    'router',
    'platform-browser',
    'platform-browser-dynamic',
    'upgrade',
  ];

  ngPackageNames.forEach(function(pkgName) {
    map['@angular/'+pkgName] = 'node_modules/@angular/' + pkgName;
  });

  ngPackageNames.forEach(function(pkgName) {
    packages['@angular/'+pkgName] = { main: 'bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  });

  var config = {
    // DEMO ONLY! REAL CODE SHOULD NOT TRANSPILE IN THE BROWSER
    transpiler: 'ts',
    typescriptOptions: {
        target: "ES5",
        module: "commonjs",
        experimentalDecorators: true,
        sourceMap: true,
        emitDecoratorMetadata: true,
        removeComments: false,
        noImplicitAny: false
    },
    meta: {
      'typescript': {
        "exports": "ts"
      }
    },
    map: map,
    packages: packages
  }

  System.config(config);

})(this);
