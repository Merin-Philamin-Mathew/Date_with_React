

# npm
- NODE PACKAGE MANAGER
- configure that in our project
    ##### npm init (-y if you want to skip any stuff) 
    - we will get a package.json file
        ## package.json
        - these package.json contains the dependencies
        - it configures npm to our project
        - most import package is bundler
            ## bundler
            - It entails combining all the various JavaScript files and dependencies into a single file for faster browser loading and execution
            - bundles your app for production
            - eg WEBPACK, PARCEL, vite

            - <code style="color : name_color">npm install -D parcel</code>
            
            - -D means dev dependency ...
                - dev dependencies in development phase and normal dependencies in production phase
                - diff between tilde and caret?????
                https://betterstack.com/community/questions/difference-between-tilde-and-caret-in-package-json/
            - we will get package-lock.json and node modules

            ## parcel
            https://parceljs.org/
            - Dev Build
            - Local Server
            - HMR >> Hot Module Replacement
                - parcel is using a File watching Algorithm writen in c++
            - Reliable Caching 
                - Faster Builds
            - Image optimization
            - Minification
            - Bundling
            - Compress
            - Consistant Hashing
            - Code Splitting
            - Differential Bundling - support older browsers
            - Diagnostic
            - Error Handling
            - Hosting on HTTPS
            - Tree Shaking - remove unused code 
            - Different dev and production bundles

            ### ?? why parcel is fast
            - it has a folder parcel-cache which consistently caches 

## node modules 
- like a database for the packages
- really heavy
    #### <code style = "color:lightblue"> transitive dependency </code>
    -->  we need parcel(webpack) which itself will have a lot of dependencies that may depend on of other dependencies

## package-lock.json
https://www.linkedin.com/pulse/what-difference-between-packagejson-package-lockjson-bala-subramanian-hgqpc/

- maintain same version in local and production

- Do you need both package-lock.json and package.json? No.

- Do you need the package.json? Yes.

- Can you have a project with only the package-lock.json? No.

- The package.json is used for more than dependencies - like defining project properties, description, author & license information, scripts, etc. The package-lock.json is solely used to lock dependencies to a specific version number.

- u dont have to push nodemodules in git( as it is heavy)
    - with package.json and package-lock.json we can recreate the nodemodules
    - <code style="color : name_color">npm install</code>
    - dont push whatever u can regenerate by the existing code


### <h3 style="color:red">Making a server using parcel</h3>
- <code style="color : name_color">npx parcel index.html</code>


# npx
- npm installs a package while npx executes a package


### <h3 style="color:red">Getting react in our app</h3>
1. By using CDNs >> but not  a good way
2. By using npm
    - install react as normal dependency<code style="color : name_color">npm install react</code>


### <h3 style="color:red">Getting reactDOM in our app</h3>
1. By using CDNs >> but not  a good way
2. By using npm
    - <code style="color : name_color">npm install react-dom</code>


### <h3 style="color:red">Start the server</h3>
- <code style="color : name_color">npx parcel index.html </code>


### <code style="color:red">Production ready</code>
- <code style="color : name_color">npx parcel build index.html </code>
- **dist** 
- the page which we see in the browser is by the 3 files in the dist folder
- here it has did all the bundling, minification, treeshaking, compression .... parcel will optimize our code like this for the production build


### <code style="color:red">Configuring in preffered browser versions</code>
- **browserslist**
- manually write in package.json <code style="color : name_color">  "browserslist":[
    "last 2 versions"
  ]</code>