/*
 *
 *  Licensed to the Apache Software Foundation (ASF) under one or more
 *  contributor license agreements.  See the NOTICE file distributed with
 *  this work for additional information regarding copyright ownership.
 *  The ASF licenses this file to You under the Apache License, Version 2.0
 *  (the "License"); you may not use this file except in compliance with
 *  the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *
 */

export enum API_CONSTANTS {
  GET_SERVICE_VERSION = '/uniplore-data-works/api/version',

  // --- user ---
  // login path
  LOGIN_PATH = '/user/login',
  TOKEN_INFO = '/uniplore-data-works/api/tokenInfo',
  LOGIN_RECORD = '/uniplore-data-works/api/log/loginRecord',
  OPERATE_LOG = '/uniplore-data-works/api/log/operateLog',
  // user login
  LOGIN = '/uniplore-data-works/api/login',
  // current user info
  CURRENT_USER = '/uniplore-app-uaa/auth/get/user',
  // logout
  LOGOUT = '/uniplore-data-works/api/outLogin',
  // choose tenant
  CHOOSE_TENANT = '/uniplore-data-works/api/chooseTenant',
  // user list
  USER = '/uniplore-data-works/api/user',
  USER_RECOVERY = '/uniplore-data-works/api/user/recovery',
  USER_RESET_PASSWORD = '/uniplore-data-works/api/user/resetPassword',
  // enable user
  USER_ENABLE = '/uniplore-data-works/api/user/enable',
  // delete user
  USER_DELETE = '/uniplore-data-works/api/user/delete',
  // user change password
  USER_MODIFY_PASSWORD = '/uniplore-data-works/api/user/modifyPassword',
  // GRANT USER TO role
  USER_ASSIGN_ROLE = '/uniplore-data-works/api/user/assignRole',
  // QUERY roles by userid
  GET_ROLES_BY_USERID = '/uniplore-data-works/api/role/getRolesAndIdsByUserId',

  // --- token ---
  // token list
  TOKEN = '/uniplore-data-works/api/token/list',
  // token delete
  TOKEN_DELETE = '/uniplore-data-works/api/token/delete',
  // token save or update
  TOKEN_SAVE_OR_UPDATE = '/uniplore-data-works/api/token/saveOrUpdateToken',
  // token build
  TOKEN_BUILD = '/uniplore-data-works/api/token/buildToken',

  // --- tenant ---
  // tenant list
  TENANT = '/uniplore-data-works/api/tenant',
  // assign user to tenant
  ASSIGN_USER_TO_TENANT = '/uniplore-data-works/api/tenant/assignUserToTenant',
  // delete tenant
  TENANT_DELETE = '/uniplore-data-works/api/tenant/delete',
  // get user list by tenantId
  GET_USER_LIST_BY_TENANTID = '/uniplore-data-works/api/user/getUserListByTenantId',
  //tenant users
  TENANT_USERS = '/uniplore-data-works/api/tenant/getUsersByTenantId',
  USER_SET_TENANT_ADMIN = '/uniplore-data-works/api/user/updateUserToTenantAdmin',
  TENANT_USER_LIST = '/uniplore-data-works/api/tenant/getTenantListByUserId',

  // --- role ---
  // role list
  ROLE = '/uniplore-data-works/api/role',
  ROLE_ADDED_OR_UPDATE = '/uniplore-data-works/api/role/addedOrUpdateRole',
  ROLE_DELETE = '/uniplore-data-works/api/role/delete',
  ROLE_ASSIGN_MENU = '/uniplore-data-works/api/roleMenu/assignMenuToRole',
  ROLE_MENU_LIST = '/uniplore-data-works/api/menu/roleMenus',
  ROLE_USER_LIST = '/uniplore-data-works/api/role/getUserListByRoleId',

  // menu
  MENU_ADD_OR_UPDATE = '/uniplore-data-works/api/menu/addOrUpdate',
  MENU_DELETE = '/uniplore-data-works/api/menu/delete',
  MENU_TREE = '/uniplore-data-works/api/menu/tree',
  MENU_LIST = '/uniplore-data-works/api/menu/listMenus',

  // --- row Permissions ---
  // row permissions list
  ROW_PERMISSIONS = '/uniplore-data-works/api/rowPermissions',
  // row permissions delete
  ROW_PERMISSIONS_DELETE = '/uniplore-data-works/api/rowPermissions/delete',

  // --- global variable ---
  // global variable list
  GLOBAL_VARIABLE = '/uniplore-data-works/api/fragment',
  // delete global variable  by id
  GLOBAL_VARIABLE_DELETE = '/uniplore-data-works/api/fragment/delete',
  // global variable enable or disable
  GLOBAL_VARIABLE_ENABLE = '/uniplore-data-works/api/fragment/enable',

  // --- registries  center ---

  // ----cluster instance
  // cluster instance list
  CLUSTER_INSTANCE = '/uniplore-data-works/api/cluster',
  CLUSTER_INSTANCE_LIST = '/uniplore-data-works/api/cluster/list',
  CLUSTER_INSTANCE_ENABLE = '/uniplore-data-works/api/cluster/enable',
  CLUSTER_INSTANCE_DELETE = '/uniplore-data-works/api/cluster/delete',
  CLUSTER_INSTANCE_KILL = '/uniplore-data-works/api/cluster/killCluster',
  CLUSTER_INSTANCE_HEARTBEATS = '/uniplore-data-works/api/cluster/heartbeats',
  CLUSTER_INSTANCE_RECYCLE = '/uniplore-data-works/api/cluster/recycle',
  CLUSTER_CONFIGURATION_START = '/uniplore-data-works/api/cluster/deploySessionClusterInstance',
  // cluster configuration list
  CLUSTER_CONFIGURATION = '/uniplore-data-works/api/clusterConfiguration/list',
  CLUSTER_CONFIGURATION_ADD_OR_UPDATE = '/uniplore-data-works/api/clusterConfiguration/saveOrUpdate',
  CLUSTER_CONFIGURATION_DELETE = '/uniplore-data-works/api/clusterConfiguration/delete',
  CLUSTER_CONFIGURATION_ENABLE = '/uniplore-data-works/api/clusterConfiguration/enable',
  CLUSTER_CONFIGURATION_TEST = '/uniplore-data-works/api/clusterConfiguration/testConnect',

  // datasource registries list
  DATASOURCE = '/uniplore-data-works/api/database/list',
  DATASOURCE_ADD_OR_UPDATE = '/uniplore-data-works/api/database/saveOrUpdate',
  // datasource registries delete
  DATASOURCE_DELETE = '/uniplore-data-works/api/database/delete',
  // datasource registries enable or disable
  DATASOURCE_ENABLE = '/uniplore-data-works/api/database/enable',
  // datasource registries test
  DATASOURCE_TEST = '/uniplore-data-works/api/database/testConnect',
  // datasource  checkHeartBeat By Id
  DATASOURCE_CHECK_HEARTBEAT_BY_ID = '/uniplore-data-works/api/database/checkHeartBeatByDataSourceId',
  // copy datasource
  DATASOURCE_COPY = '/uniplore-data-works/api/database/copyDatabase',
  // get schema by datasource id
  DATASOURCE_GET_SCHEMA_TABLES = '/uniplore-data-works/api/database/getSchemasAndTables',
  DATASOURCE_GET_COLUMNS_BY_TABLE = '/uniplore-data-works/api/database/listColumns',
  DATASOURCE_GET_GEN_SQL = '/uniplore-data-works/api/database/getSqlGeneration',
  DATASOURCE_QUERY_DATA = '/uniplore-data-works/api/database/queryData',

  // document list
  DOCUMENT = '/uniplore-data-works/api/document',
  // delete document by id
  DOCUMENT_DELETE = '/uniplore-data-works/api/document/delete',
  // document enable or disable
  DOCUMENT_ENABLE = '/uniplore-data-works/api/document/enable',

  // ---- alert instance ----
  // alert instance list
  ALERT_INSTANCE = '/uniplore-data-works/api/alertInstance/list',
  ALERT_INSTANCE_ADD_OR_UPDATE = '/uniplore-data-works/api/alertInstance/saveOrUpdate',
  // delete alert instance by id
  ALERT_INSTANCE_DELETE = '/uniplore-data-works/api/alertInstance/delete',
  // alert instance enable or disable
  ALERT_INSTANCE_ENABLE = '/uniplore-data-works/api/alertInstance/enable',
  // alert instance list all
  ALERT_INSTANCE_LIST_ENABLE_ALL = '/uniplore-data-works/api/alertInstance/listEnabledAll',
  // sendTest
  ALERT_INSTANCE_SEND_TEST = '/uniplore-data-works/api/alertInstance/sendTest',

  // ---- alert group ----
  ALERT_GROUP = '/uniplore-data-works/api/alertGroup/list',
  ALERT_GROUP_LIST_ENABLE_ALL = '/uniplore-data-works/api/alertGroup/listEnabledAll',
  ALERT_GROUP_ADD_OR_UPDATE = '/uniplore-data-works/api/alertGroup/addOrUpdate',
  // delete alert group by id
  ALERT_GROUP_DELETE = '/uniplore-data-works/api/alertGroup/delete',
  // alert group enable or disable
  ALERT_GROUP_ENABLE = '/uniplore-data-works/api/alertGroup/enable',

  ALERT_RULE_LIST = '/uniplore-data-works/api/alertRule/list',
  ALERT_RULE = '/uniplore-data-works/api/alertRule',
  ALERT_TEMPLATE = '/uniplore-data-works/api/alertTemplate',

  // ---- get git project list----
  GIT_PROJECT = '/uniplore-data-works/api/git/getProjectList',
  // ---- saveOrUpdate ----
  GIT_SAVE_UPDATE = '/uniplore-data-works/api/git/saveOrUpdate',
  // dragendSortProject
  GIT_DRAGEND_SORT_PROJECT = '/uniplore-data-works/api/git/dragendSortProject',
  // dragendSort jar
  GIT_DRAGEND_SORT_JAR = '/uniplore-data-works/api/git/dragendSortJar',
  // ---- get git branch ----
  GIT_BRANCH = '/uniplore-data-works/api/git/getBranchList',
  // ---- DELETE project ----
  GIT_PROJECT_DELETE = '/uniplore-data-works/api/git/deleteProject',
  // ---- update project State  ----
  GIT_PROJECT_ENABLE = '/uniplore-data-works/api/git/updateEnable',
  // ---- get project details by id ----
  GIT_PROJECT_CODE_TREE = '/uniplore-data-works/api/git/getProjectCode',
  // ---- get project build by id ----
  GIT_PROJECT_BUILD = '/uniplore-data-works/api/git/build',
  // ---- get project build logs by id----
  GIT_PROJECT_BUILD_STEP_LOGS = '/uniplore-data-works/api/git/build-step-logs',

  //UDF Manage
  UDF_LIST = '/uniplore-data-works/api/udf/list',
  UDF_RESOURCES_LIST = '/uniplore-data-works/api/udf/udfResourcesList',
  UDF_ADD = '/uniplore-data-works/api/udf/addOrUpdateByResourceId',
  UDF_UPDATE = '/uniplore-data-works/api/udf/update',

  // UDF template
  UDF_TEMPLATE = '/uniplore-data-works/api/udf/template/list',
  // UDF template add or update
  UDF_TEMPLATE_ADD_UPDATE = '/uniplore-data-works/api/udf/template',
  // UDF template delete
  UDF_TEMPLATE_DELETE = '/uniplore-data-works/api/udf/template/delete',
  // UDF template enable or disable
  UDF_TEMPLATE_ENABLE = '/uniplore-data-works/api/udf/template/enable',
  UDF_TEMPLATE_TREE = '/uniplore-data-works/api/udf/template/tree',

  // system config center
  // global config list
  SYSTEM_GET_ALL_CONFIG = '/uniplore-data-works/api/sysConfig/getAll',
  SYSTEM_GET_ONE_TYPE_CONFIG = '/uniplore-data-works/api/sysConfig/getConfigByType',
  // update global config by key
  SYSTEM_MODIFY_CONFIG = '/uniplore-data-works/api/sysConfig/modifyConfig',
  //-- system root logs
  SYSTEM_ROOT_LOG = '/uniplore-data-works/api/system/getRootLog',
  // -- get logs list
  SYSTEM_ROOT_LOG_LIST = '/uniplore-data-works/api/system/listLogDir',
  // -- READ LOG file
  SYSTEM_ROOT_LOG_READ = '/uniplore-data-works/api/system/readFile',

  // process list
  PROCESS_LIST = '/uniplore-data-works/api/process/listAllProcess',
  PROCESS_LOG = '/uniplore-data-works/api/process/getProcess',

  // ---- devops
  JOB_INSTANCE = '/uniplore-data-works/api/jobInstance',
  GET_JOB_INSTANCE_BY_TASK_ID = '/uniplore-data-works/api/jobInstance/getJobInstanceByTaskId',
  GET_JOB_BY_ID = '/uniplore-data-works/api/jobInstance/getOneById',
  GET_LATEST_HISTORY_BY_ID = '/uniplore-data-works/api/history/getLatestHistoryById',
  GET_JOB_DETAIL = '/uniplore-data-works/api/jobInstance/getJobInfoDetail',
  REFRESH_JOB_DETAIL = '/uniplore-data-works/api/jobInstance/refreshJobInfoDetail',
  READ_CHECKPOINT = '/uniplore-data-works/api/flinkConf/readCheckPoint',
  GET_JOB_VERSION = '/uniplore-data-works/api/task/version',
  GET_JOBMANAGER_LOG = 'uniplore-data-worksapi/jobInstance/getJobManagerLog',
  GET_JOBMANAGER_STDOUT = 'uniplore-data-worksapi/jobInstance/getJobManagerStdOut',
  GET_JOBMANAGER_THREAD_DUMP = 'uniplore-data-worksapi/jobInstance/getJobManagerThreadDump',
  GET_TASKMANAGER_LIST = 'uniplore-data-worksapi/jobInstance/getTaskManagerList',
  GET_TASKMANAGER_LOG = 'uniplore-data-worksapi/jobInstance/getTaskManagerLog',
  GET_JOB_METRICS_ITEMS = 'uniplore-data-worksapi/jobInstance/getJobMetricsItems',
  CANCEL_JOB = '/uniplore-data-works/api/task/cancel',
  // /api/studio/getLineage
  STUDIO_GET_LINEAGE = '/uniplore-data-works/api/studio/getLineage',
  // /uniplore-data-works/api/jobInstance/getLineage
  JOB_INSTANCE_GET_LINEAGE = '/uniplore-data-works/api/jobInstance/getLineage',
  RESTART_TASK = '/uniplore-data-works/api/task/restartTask',
  SAVEPOINT = '/uniplore-data-works/api/task/savepoint',
  RESTART_TASK_FROM_CHECKPOINT = '/uniplore-data-works/api/task/selectSavePointRestartTask',
  GET_SAVEPOINT_LIST_BY_TASK_ID = '/uniplore-data-works/api/savepoints/listSavepointsByTaskId',
  GET_SAVEPOINT_LIST = '/uniplore-data-works/api/savepoints',
  ALERT_HISTORY_LIST = '/uniplore-data-works/api/alertHistory/list',
  ALERT_HISTORY_DELETE = '/uniplore-data-works/api/alertHistory/delete',

  // -- LDAP
  GET_LDAP_ENABLE = '/uniplore-data-works/api/ldap/ldapEnableStatus',
  LDAP_TEST_CONNECT = '/uniplore-data-works/api/ldap/testConnection',
  LDAP_TEST_LOGIN = '/uniplore-data-works/api/ldap/testLogin',
  LDAP_LIST_USER = '/uniplore-data-works/api/ldap/listUser',
  LDAP_IMPORT_USERS = '/uniplore-data-works/api/ldap/importUsers',

  // -- home
  GET_STATUS_COUNT = 'uniplore-data-worksapi/jobInstance/getStatusCount',
  GET_RESOURCE_OVERVIEW = '/uniplore-data-works/api/home/getResourceOverview',
  GET_JOB_STATUS_OVERVIEW = '/uniplore-data-works/api/home/getJobStatusOverview',
  GET_JOB_TYPE_OVERVIEW = '/uniplore-data-works/api/home/getJobTypeOverview',
  GET_JOB_MODEL_OVERVIEW = '/uniplore-data-works/api/home/getJobModelOverview',

  // monitor
  MONITOR_GET_SYSTEM_DATA = '/uniplore-data-works/api/monitor/getSysData',
  MONITOR_GET_FLINK_DATA = '/uniplore-data-works/api/monitor/getFlinkData',
  MONITOR_GET_LAST_DATA = '/uniplore-data-works/api/monitor/getLastUpdateData',
  MONITOR_GET_JVM_INFO = '/uniplore-data-works/api/monitor/getJvmInfo',
  METRICS_LAYOUT_GET_BY_NAME = '/uniplore-data-works/api/monitor/getMetricsLayoutByName',
  METRICS_LAYOUT_DELETE = '/uniplore-data-works/api/monitor/deleteMetricsLayout',
  JOB_METRICS = '/uniplore-data-works/api/monitor/jobMetrics',
  SAVE_FLINK_METRICS = '/uniplore-data-works/api/monitor/saveFlinkMetrics/',
  GET_METRICS_LAYOUT = '/uniplore-data-works/api/monitor/getMetricsLayout',

  // flink
  FLINK_PROXY = '/uniplore-data-works/api/flink',
  FLINK_TABLE_DATA = '/uniplore-data-works/api/subscribe/print',

  // resource
  RESOURCE_SHOW_TREE = '/uniplore-data-works/api/resource/getResourcesTreeData',
  RESOURCE_GET_CONTENT_BY_ID = '/uniplore-data-works/api/resource/getContentByResourceId',
  RESOURCE_REMOVE = '/uniplore-data-works/api/resource/remove',
  RESOURCE_CREATE_FOLDER = '/uniplore-data-works/api/resource/createFolder',
  RESOURCE_RENAME = '/uniplore-data-works/api/resource/rename',
  RESOURCE_UPLOAD = '/uniplore-data-works/api/resource/uploadFile',

  // catalog
  DELETE_CATALOGUE_BY_ID_URL = '/uniplore-data-works/api/catalogue/deleteCatalogueById',
  SAVE_OR_UPDATE_TASK_URL = '/uniplore-data-works/api/catalogue/saveOrUpdateCatalogueAndTask',
  SAVE_OR_UPDATE_CATALOGUE_URL = '/uniplore-data-works/api/catalogue/saveOrUpdateCatalogue',
  COPY_TASK_URL = '/uniplore-data-works/api/catalogue/copyTask',
  MOVE_CATALOGUE_URL = '/uniplore-data-works/api/catalogue/moveCatalogue',

  //task
  TASK = '/uniplore-data-works/api/task',

  // history
  HISTORY_LIST = '/uniplore-data-works/api/history/list'
}
