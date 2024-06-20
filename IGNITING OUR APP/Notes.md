### npm
- NODE PACKAGE MANAGER
- configure that in our project
    <!-- npm init (-y if you want to skip any stuff) -->
    - we will get a package.json file
        ## package.json
        - these package.json contains the dependencies
        - it configures npm to our project
        - most import package is bundler
            ## bundler
            - It entails combining all the various JavaScript files and dependencies into a single file for faster browser loading and execution
            - bundles your app for production
            - eg WEBPACK, PARCEL, vite
            <!-- npm install -D parcel -->
            - -D means dev dependency ...
                - dev dependencies in development phase and normal dependencies in production phase
                - diff between tilde and caret?????
            - we will get package-lock.json and node modules

## node modules 
- like a database for the packages
- really heavy
    <!-- transitive dependency -->
    -->  we need parcel(webpack) which itself will have a lot of dependencies that may depend on of other dependencies
## package-lock.json

