import { Component, ComponentContainer } from '@firebase/component';
import { __values, __assign, __awaiter, __generator } from 'tslib';
import { Logger, setUserLogHandler, setLogLevel as setLogLevel$1 } from '@firebase/logger';
import { ErrorFactory, deepEqual } from '@firebase/util';
export { FirebaseError } from '@firebase/util';

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var PlatformLoggerServiceImpl = /** @class */ (function () {
    function PlatformLoggerServiceImpl(container) {
        this.container = container;
    }
    // In initial implementation, this will be called by installations on
    // auth token refresh, and installations will send this string.
    PlatformLoggerServiceImpl.prototype.getPlatformInfoString = function () {
        var providers = this.container.getProviders();
        // Loop through providers and get library/version pairs from any that are
        // version components.
        return providers
            .map(function (provider) {
            if (isVersionServiceProvider(provider)) {
                var service = provider.getImmediate();
                return service.library + "/" + service.version;
            }
            else {
                return null;
            }
        })
            .filter(function (logString) { return logString; })
            .join(' ');
    };
    return PlatformLoggerServiceImpl;
}());
/**
 *
 * @param provider check if this provider provides a VersionService
 *
 * NOTE: Using Provider<'app-version'> is a hack to indicate that the provider
 * provides VersionService. The provider is not necessarily a 'app-version'
 * provider.
 */
function isVersionServiceProvider(provider) {
    var component = provider.getComponent();
    return (component === null || component === void 0 ? void 0 : component.type) === "VERSION" /* VERSION */;
}

var name$o = "@firebase/app";
var version$1 = "0.7.9";

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var logger = new Logger('@firebase/app');

var name$n = "@firebase/app-compat";

var name$m = "@firebase/analytics-compat";

var name$l = "@firebase/analytics";

var name$k = "@firebase/app-check-compat";

var name$j = "@firebase/app-check";

var name$i = "@firebase/auth";

var name$h = "@firebase/auth-compat";

var name$g = "@firebase/database";

var name$f = "@firebase/database-compat";

var name$e = "@firebase/functions";

var name$d = "@firebase/functions-compat";

var name$c = "@firebase/installations";

var name$b = "@firebase/installations-compat";

var name$a = "@firebase/messaging";

var name$9 = "@firebase/messaging-compat";

var name$8 = "@firebase/performance";

var name$7 = "@firebase/performance-compat";

var name$6 = "@firebase/remote-config";

var name$5 = "@firebase/remote-config-compat";

var name$4 = "@firebase/storage";

var name$3 = "@firebase/storage-compat";

var name$2 = "@firebase/firestore";

var name$1 = "@firebase/firestore-compat";

var name = "firebase";
var version = "9.5.0";

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a$1;
/**
 * The default app name
 *
 * @internal
 */
var DEFAULT_ENTRY_NAME = '[DEFAULT]';
var PLATFORM_LOG_STRING = (_a$1 = {},
    _a$1[name$o] = 'fire-core',
    _a$1[name$n] = 'fire-core-compat',
    _a$1[name$l] = 'fire-analytics',
    _a$1[name$m] = 'fire-analytics-compat',
    _a$1[name$j] = 'fire-app-check',
    _a$1[name$k] = 'fire-app-check-compat',
    _a$1[name$i] = 'fire-auth',
    _a$1[name$h] = 'fire-auth-compat',
    _a$1[name$g] = 'fire-rtdb',
    _a$1[name$f] = 'fire-rtdb-compat',
    _a$1[name$e] = 'fire-fn',
    _a$1[name$d] = 'fire-fn-compat',
    _a$1[name$c] = 'fire-iid',
    _a$1[name$b] = 'fire-iid-compat',
    _a$1[name$a] = 'fire-fcm',
    _a$1[name$9] = 'fire-fcm-compat',
    _a$1[name$8] = 'fire-perf',
    _a$1[name$7] = 'fire-perf-compat',
    _a$1[name$6] = 'fire-rc',
    _a$1[name$5] = 'fire-rc-compat',
    _a$1[name$4] = 'fire-gcs',
    _a$1[name$3] = 'fire-gcs-compat',
    _a$1[name$2] = 'fire-fst',
    _a$1[name$1] = 'fire-fst-compat',
    _a$1['fire-js'] = 'fire-js',
    _a$1[name] = 'fire-js-all',
    _a$1);

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @internal
 */
var _apps = new Map();
/**
 * Registered components.
 *
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
var _components = new Map();
/**
 * @param component - the component being added to this app's container
 *
 * @internal
 */
function _addComponent(app, component) {
    try {
        app.container.addComponent(component);
    }
    catch (e) {
        logger.debug("Component " + component.name + " failed to register with FirebaseApp " + app.name, e);
    }
}
/**
 *
 * @internal
 */
function _addOrOverwriteComponent(app, component) {
    app.container.addOrOverwriteComponent(component);
}
/**
 *
 * @param component - the component to register
 * @returns whether or not the component is registered successfully
 *
 * @internal
 */
function _registerComponent(component) {
    var e_1, _a;
    var componentName = component.name;
    if (_components.has(componentName)) {
        logger.debug("There were multiple attempts to register component " + componentName + ".");
        return false;
    }
    _components.set(componentName, component);
    try {
        // add the component to existing app instances
        for (var _b = __values(_apps.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
            var app = _c.value;
            _addComponent(app, component);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return true;
}
/**
 *
 * @param app - FirebaseApp instance
 * @param name - service name
 *
 * @returns the provider for the service with the matching name
 *
 * @internal
 */
function _getProvider(app, name) {
    return app.container.getProvider(name);
}
/**
 *
 * @param app - FirebaseApp instance
 * @param name - service name
 * @param instanceIdentifier - service instance identifier in case the service supports multiple instances
 *
 * @internal
 */
function _removeServiceInstance(app, name, instanceIdentifier) {
    if (instanceIdentifier === void 0) { instanceIdentifier = DEFAULT_ENTRY_NAME; }
    _getProvider(app, name).clearInstance(instanceIdentifier);
}
/**
 * Test only
 *
 * @internal
 */
function _clearComponents() {
    _components.clear();
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a;
var ERRORS = (_a = {},
    _a["no-app" /* NO_APP */] = "No Firebase App '{$appName}' has been created - " +
        'call Firebase App.initializeApp()',
    _a["bad-app-name" /* BAD_APP_NAME */] = "Illegal App name: '{$appName}",
    _a["duplicate-app" /* DUPLICATE_APP */] = "Firebase App named '{$appName}' already exists with different options or config",
    _a["app-deleted" /* APP_DELETED */] = "Firebase App named '{$appName}' already deleted",
    _a["invalid-app-argument" /* INVALID_APP_ARGUMENT */] = 'firebase.{$appName}() takes either no argument or a ' +
        'Firebase App instance.',
    _a["invalid-log-argument" /* INVALID_LOG_ARGUMENT */] = 'First argument to `onLog` must be null or a function.',
    _a);
var ERROR_FACTORY = new ErrorFactory('app', 'Firebase', ERRORS);

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var FirebaseAppImpl = /** @class */ (function () {
    function FirebaseAppImpl(options, config, container) {
        var _this = this;
        this._isDeleted = false;
        this._options = __assign({}, options);
        this._config = __assign({}, config);
        this._name = config.name;
        this._automaticDataCollectionEnabled =
            config.automaticDataCollectionEnabled;
        this._container = container;
        this.container.addComponent(new Component('app', function () { return _this; }, "PUBLIC" /* PUBLIC */));
    }
    Object.defineProperty(FirebaseAppImpl.prototype, "automaticDataCollectionEnabled", {
        get: function () {
            this.checkDestroyed();
            return this._automaticDataCollectionEnabled;
        },
        set: function (val) {
            this.checkDestroyed();
            this._automaticDataCollectionEnabled = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FirebaseAppImpl.prototype, "name", {
        get: function () {
            this.checkDestroyed();
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FirebaseAppImpl.prototype, "options", {
        get: function () {
            this.checkDestroyed();
            return this._options;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FirebaseAppImpl.prototype, "config", {
        get: function () {
            this.checkDestroyed();
            return this._config;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FirebaseAppImpl.prototype, "container", {
        get: function () {
            return this._container;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FirebaseAppImpl.prototype, "isDeleted", {
        get: function () {
            return this._isDeleted;
        },
        set: function (val) {
            this._isDeleted = val;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * This function will throw an Error if the App has already been deleted -
     * use before performing API actions on the App.
     */
    FirebaseAppImpl.prototype.checkDestroyed = function () {
        if (this.isDeleted) {
            throw ERROR_FACTORY.create("app-deleted" /* APP_DELETED */, { appName: this._name });
        }
    };
    return FirebaseAppImpl;
}());

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * The current SDK version.
 *
 * @public
 */
var SDK_VERSION = version;
function initializeApp(options, rawConfig) {
    var e_1, _a;
    if (rawConfig === void 0) { rawConfig = {}; }
    if (typeof rawConfig !== 'object') {
        var name_1 = rawConfig;
        rawConfig = { name: name_1 };
    }
    var config = __assign({ name: DEFAULT_ENTRY_NAME, automaticDataCollectionEnabled: false }, rawConfig);
    var name = config.name;
    if (typeof name !== 'string' || !name) {
        throw ERROR_FACTORY.create("bad-app-name" /* BAD_APP_NAME */, {
            appName: String(name)
        });
    }
    var existingApp = _apps.get(name);
    if (existingApp) {
        // return the existing app if options and config deep equal the ones in the existing app.
        if (deepEqual(options, existingApp.options) &&
            deepEqual(config, existingApp.config)) {
            return existingApp;
        }
        else {
            throw ERROR_FACTORY.create("duplicate-app" /* DUPLICATE_APP */, { appName: name });
        }
    }
    var container = new ComponentContainer(name);
    try {
        for (var _b = __values(_components.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
            var component = _c.value;
            container.addComponent(component);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    var newApp = new FirebaseAppImpl(options, config, container);
    _apps.set(name, newApp);
    return newApp;
}
/**
 * Retrieves a {@link @firebase/app#FirebaseApp} instance.
 *
 * When called with no arguments, the default app is returned. When an app name
 * is provided, the app corresponding to that name is returned.
 *
 * An exception is thrown if the app being retrieved has not yet been
 * initialized.
 *
 * @example
 * ```javascript
 * // Return the default app
 * const app = getApp();
 * ```
 *
 * @example
 * ```javascript
 * // Return a named app
 * const otherApp = getApp("otherApp");
 * ```
 *
 * @param name - Optional name of the app to return. If no name is
 *   provided, the default is `"[DEFAULT]"`.
 *
 * @returns The app corresponding to the provided app name.
 *   If no app name is provided, the default app is returned.
 *
 * @public
 */
function getApp(name) {
    if (name === void 0) { name = DEFAULT_ENTRY_NAME; }
    var app = _apps.get(name);
    if (!app) {
        throw ERROR_FACTORY.create("no-app" /* NO_APP */, { appName: name });
    }
    return app;
}
/**
 * A (read-only) array of all initialized apps.
 * @public
 */
function getApps() {
    return Array.from(_apps.values());
}
/**
 * Renders this app unusable and frees the resources of all associated
 * services.
 *
 * @example
 * ```javascript
 * deleteApp(app)
 *   .then(function() {
 *     console.log("App deleted successfully");
 *   })
 *   .catch(function(error) {
 *     console.log("Error deleting app:", error);
 *   });
 * ```
 *
 * @public
 */
function deleteApp(app) {
    return __awaiter(this, void 0, void 0, function () {
        var name;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    name = app.name;
                    if (!_apps.has(name)) return [3 /*break*/, 2];
                    _apps.delete(name);
                    return [4 /*yield*/, Promise.all(app.container
                            .getProviders()
                            .map(function (provider) { return provider.delete(); }))];
                case 1:
                    _a.sent();
                    app.isDeleted = true;
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    });
}
/**
 * Registers a library's name and version for platform logging purposes.
 * @param library - Name of 1p or 3p library (e.g. firestore, angularfire)
 * @param version - Current version of that library.
 * @param variant - Bundle variant, e.g., node, rn, etc.
 *
 * @public
 */
function registerVersion(libraryKeyOrName, version, variant) {
    var _a;
    // TODO: We can use this check to whitelist strings when/if we set up
    // a good whitelist system.
    var library = (_a = PLATFORM_LOG_STRING[libraryKeyOrName]) !== null && _a !== void 0 ? _a : libraryKeyOrName;
    if (variant) {
        library += "-" + variant;
    }
    var libraryMismatch = library.match(/\s|\//);
    var versionMismatch = version.match(/\s|\//);
    if (libraryMismatch || versionMismatch) {
        var warning = [
            "Unable to register library \"" + library + "\" with version \"" + version + "\":"
        ];
        if (libraryMismatch) {
            warning.push("library name \"" + library + "\" contains illegal characters (whitespace or \"/\")");
        }
        if (libraryMismatch && versionMismatch) {
            warning.push('and');
        }
        if (versionMismatch) {
            warning.push("version name \"" + version + "\" contains illegal characters (whitespace or \"/\")");
        }
        logger.warn(warning.join(' '));
        return;
    }
    _registerComponent(new Component(library + "-version", function () { return ({ library: library, version: version }); }, "VERSION" /* VERSION */));
}
/**
 * Sets log handler for all Firebase SDKs.
 * @param logCallback - An optional custom log handler that executes user code whenever
 * the Firebase SDK makes a logging call.
 *
 * @public
 */
function onLog(logCallback, options) {
    if (logCallback !== null && typeof logCallback !== 'function') {
        throw ERROR_FACTORY.create("invalid-log-argument" /* INVALID_LOG_ARGUMENT */);
    }
    setUserLogHandler(logCallback, options);
}
/**
 * Sets log level for all Firebase SDKs.
 *
 * All of the log types above the current log level are captured (i.e. if
 * you set the log level to `info`, errors are logged, but `debug` and
 * `verbose` logs are not).
 *
 * @public
 */
function setLogLevel(logLevel) {
    setLogLevel$1(logLevel);
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function registerCoreComponents(variant) {
    _registerComponent(new Component('platform-logger', function (container) { return new PlatformLoggerServiceImpl(container); }, "PRIVATE" /* PRIVATE */));
    // Register `app` package.
    registerVersion(name$o, version$1, variant);
    // BUILD_TARGET will be replaced by values like esm5, esm2017, cjs5, etc during the compilation
    registerVersion(name$o, version$1, 'esm5');
    // Register platform SDK identifier (no version).
    registerVersion('fire-js', '');
}

/**
 * Firebase App
 *
 * @remarks This package coordinates the communication between the different Firebase components
 * @packageDocumentation
 */
registerCoreComponents('');

export { SDK_VERSION, DEFAULT_ENTRY_NAME as _DEFAULT_ENTRY_NAME, _addComponent, _addOrOverwriteComponent, _apps, _clearComponents, _components, _getProvider, _registerComponent, _removeServiceInstance, deleteApp, getApp, getApps, initializeApp, onLog, registerVersion, setLogLevel };
//# sourceMappingURL=index.esm5.js.map
