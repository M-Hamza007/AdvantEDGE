/*
 * Copyright (c) 2022  The AdvantEDGE Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * AdvantEDGE Auth Service REST API
 * This API provides microservice API authentication & authorization services <p>**Micro-service**<br>[meep-auth](https://github.com/InterDigitalInc/AdvantEDGE/tree/master/go-apps/meep-auth) <p>**Type & Usage**<br>Platform interface used by ingress to authenticate & authorize microservice API access <p>**Details**<br>API details available at _your-AdvantEDGE-ip-address/api_
 *
 * OpenAPI spec version: 1.0.0
 * Contact: AdvantEDGE@InterDigital.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.9
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Sandbox'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Sandbox'));
  } else {
    // Browser globals (root is window)
    if (!root.AdvantEdgeAuthServiceRestApi) {
      root.AdvantEdgeAuthServiceRestApi = {};
    }
    root.AdvantEdgeAuthServiceRestApi.AuthApi = factory(root.AdvantEdgeAuthServiceRestApi.ApiClient, root.AdvantEdgeAuthServiceRestApi.Sandbox);
  }
}(this, function(ApiClient, Sandbox) {
  'use strict';

  /**
   * Auth service.
   * @module api/AuthApi
   * @version 1.0.0
   */

  /**
   * Constructs a new AuthApi. 
   * @alias module:api/AuthApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the authenticate operation.
     * @callback module:api/AuthApi~authenticateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Authenticate service request
     * Authenticate & authorize microservice endpoint access
     * @param {Object} opts Optional parameters
     * @param {String} opts.svc Service requesting authentication
     * @param {String} opts.sbox Sandbox name
     * @param {module:api/AuthApi~authenticateCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.authenticate = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'svc': opts['svc'],
        'sbox': opts['sbox'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/authenticate', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the authorize operation.
     * @callback module:api/AuthApi~authorizeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * OAuth authorization response endpoint
     * Redirect URI endpoint for OAuth authorization responses. Starts a user session.
     * @param {Object} opts Optional parameters
     * @param {String} opts.code Temporary authorization code
     * @param {String} opts.state User-provided random state
     * @param {module:api/AuthApi~authorizeCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.authorize = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'code': opts['code'],
        'state': opts['state'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/authorize', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the login operation.
     * @callback module:api/AuthApi~loginCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Initiate OAuth login procedure
     * Start OAuth login procedure with provider
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.provider Oauth provider
     * @param {module:model/String} opts.sbox Create Sandbox by default
     * @param {module:api/AuthApi~loginCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.login = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'provider': opts['provider'],
        'sbox': opts['sbox'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/login', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the loginSupported operation.
     * @callback module:api/AuthApi~loginSupportedCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check if login is supported
     * Check if login is supported and whether session exists
     * @param {module:api/AuthApi~loginSupportedCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.loginSupported = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/loginSupported', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the loginUser operation.
     * @callback module:api/AuthApi~loginUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Sandbox} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Start a session
     * Start a session after authenticating user
     * @param {Object} opts Optional parameters
     * @param {String} opts.username User Name
     * @param {String} opts.password User Password
     * @param {module:api/AuthApi~loginUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Sandbox}
     */
    this.loginUser = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'username': opts['username'],
        'password': opts['password']
      };

      var authNames = [];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = Sandbox;

      return this.apiClient.callApi(
        '/login', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the logout operation.
     * @callback module:api/AuthApi~logoutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Terminate a session
     * Terminate a session
     * @param {module:api/AuthApi~logoutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.logout = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/logout', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the triggerWatchdog operation.
     * @callback module:api/AuthApi~triggerWatchdogCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send heartbeat to watchdog
     * Send heartbeat to watchdog to keep session alive
     * @param {module:api/AuthApi~triggerWatchdogCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.triggerWatchdog = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/watchdog', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
