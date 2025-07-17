This is the directory that contains all the files related to hosting a server using node.



The `package.json` file is made by doing `npm init`.
Adding the `--yes` flag skips all the prompts and uses default parameters.

`npm install <pkg>` can also be used afterwards to install a package a save it to the `package.json` file.
`install` can be shortened to `i`.
`package-lock.json` is created automatically.

Packages can also be uninstalled using `npm uninstall <pkg>`.



Semantic versioning: "^major.minor.patch" a standard for updates which describes what changes have occurred.

Patch updates are mostly just small changes like bug fixes.
Minor updates add new functionality and possibly deprecate old functionally while allowing those functions to still be used ... None-breaking changes.
Major updates are breaking changes, meaning that the code is not compatible with any other major version.

The karet ^ character indicates that major updates should not be automatically installed, but minor and patch updates may be automatically installed (e.g. 4.x.x).
The tilde ~ character indicates that neither major nor minor updates should be installed automatically. Only patch updates may be automatically installed (e.g. 4.17.x).
If neither character is present, then this exact version must be kept without any automatic installation of any kind (e.g. 4.17.11).