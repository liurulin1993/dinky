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

package org.dinky.data.model;

import cn.hutool.core.bean.BeanUtil;
import cn.uniplore.service.data.datasource.vo.FeignDatasourceByDinkyVO;
import cn.uniplore.service.data.datasource.vo.FeignDatasourceVO;
import com.alibaba.fastjson.JSONObject;
import org.apache.ibatis.type.JdbcType;
import org.dinky.context.TenantContextHolder;
import org.dinky.data.typehandler.JSONObjectHandler;
import org.dinky.metadata.config.DriverConfig;
import org.dinky.mybatis.model.SuperEntity;

import java.io.File;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableName;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * DataBase
 *
 * @since 2021/7/20 20:53
 */
@Data
@EqualsAndHashCode(callSuper = false)
@TableName(value = "dinky_database", autoResultMap = true)
@ApiModel(value = "DataBase", description = "DataBase Register")
public class DataBase extends SuperEntity<DataBase> {

    private static final long serialVersionUID = -5002272138861566408L;

    @ApiModelProperty(value = "tenantId", required = true, dataType = "Integer", example = "1")
    private Integer tenantId;

    @ApiModelProperty(value = "dsDatasourceId", dataType = "Long", example = "1")
    private String dsDatasourceId;

    @ApiModelProperty(value = "groupName", required = true, dataType = "String", example = "source")
    private String groupName;

    @ApiModelProperty(value = "type", required = true, dataType = "String", example = "MySQL")
    private String type;

    @ApiModelProperty(value = "connectConfig", required = true, dataType = "String", example = "{}")
    @TableField(typeHandler = JSONObjectHandler.class)
    private Map<String, Object> connectConfig;

    @ApiModelProperty(value = "note", dataType = "String", example = "note")
    private String note;

    @ApiModelProperty(value = "flinkConfig", dataType = "String", example = "flinkConfig")
    private String flinkConfig;

    @ApiModelProperty(value = "flinkTemplate", dataType = "String", example = "flinkTemplate")
    private String flinkTemplate;

    @ApiModelProperty(value = "dbVersion", dataType = "String", example = "dbVersion")
    private String dbVersion;

    @ApiModelProperty(value = "status", dataType = "Boolean", example = "true")
    private Boolean status;

    @ApiModelProperty(value = "healthTime", dataType = "LocalDateTime", example = "2021-07-20 20:53:00")
    private LocalDateTime healthTime;

    @ApiModelProperty(value = "heartbeatTime", dataType = "LocalDateTime", example = "2021-07-20 20:53:00")
    private LocalDateTime heartbeatTime;

    public DriverConfig<Map<String, Object>> getDriverConfig() {
        return new DriverConfig<Map<String, Object>>(getName(), getType(), connectConfig);
    }

    public DataBase toDataBaseByDataEntity(FeignDatasourceVO datasourceVO) {
        DataBase dataBase = new DataBase();
        String type = datasourceVO.getType();
        dataBase.setId(datasourceVO.getId().intValue());
        dataBase.setStatus(true);

        dataBase.setDsDatasourceId(datasourceVO.getId().toString());
        dataBase.setNote(datasourceVO.getDescription());
        dataBase.setName(datasourceVO.getName());
        dataBase.setEnabled(true);
        dataBase.setCreateTime(datasourceVO.getCreateTime());
        dataBase.setUpdateTime(datasourceVO.getUpdateTime());
        dataBase.setCreator(datasourceVO.getCreateBy().intValue());
        dataBase.setUpdater(datasourceVO.getUpdateBy().intValue());
        Integer tenantId = (Integer) TenantContextHolder.get();
        dataBase.setTenantId(tenantId);
        dataBase.setType(datasourceVO.getType());
        Map<String, Object> connectConfig = new HashMap<>();
        JSONObject jsonObject = JSONObject.parseObject(datasourceVO.getConnectRecipe());
        JSONObject config = jsonObject.getJSONObject("config");
        connectConfig.put("username",config.getString("username"));
        connectConfig.put("password",config.getString("password"));
        String url = null;
        if("MYSQL".equals(type)){
            url = "jdbc:mysql://" + config.getString("hostname") + ":" + config.getString("port") + "?useSSL=false&serverTimezone=UTC";
        }
        connectConfig.put("url",url);
        dataBase.setConnectConfig(connectConfig);
        return dataBase;
    }

    public DataBase toDataBaseByDataEntityByDinky(FeignDatasourceByDinkyVO datasourceVO) {
        DataBase dataBase = new DataBase();
        String type = datasourceVO.getType();
        dataBase.setStatus(true);

        dataBase.setDsDatasourceId(datasourceVO.getId().toString());
        dataBase.setNote(datasourceVO.getDescription());
        dataBase.setName(datasourceVO.getName());
        dataBase.setEnabled(true);
        dataBase.setCreateTime(datasourceVO.getCreateTime());
        dataBase.setUpdateTime(datasourceVO.getUpdateTime());
        dataBase.setCreator(datasourceVO.getCreateBy().intValue());
        dataBase.setUpdater(datasourceVO.getUpdateBy().intValue());
        Integer tenantId = (Integer) TenantContextHolder.get();
        dataBase.setTenantId(tenantId);
        dataBase.setType(datasourceVO.getType());
        Map<String, Object> connectConfig = new HashMap<>();
        JSONObject jsonObject = JSONObject.parseObject(datasourceVO.getConnectRecipe());
        JSONObject config = jsonObject.getJSONObject("config");
        connectConfig.put("username",config.getString("username"));
        connectConfig.put("password",config.getString("password"));
        String url = null;
        if("MYSQL".equals(type)){
            url = "jdbc:mysql://" + config.getString("hostname") + ":" + config.getString("port") + "?useSSL=false&serverTimezone=UTC";
        }else if("POSTGRES".equals(type)){
            dataBase.setType("PostgreSql");
            url = "jdbc:postgresql://" + config.getString("hostname") + ":" + config.getString("port") + "/" + config.getString("databaseName");
        }else if("MSSQL".equals(type)){
            url = "jdbc:sqlserver://" + config.getString("hostname") + ":" + config.getString("port") + ";DatabaseName=" + config.getString("databaseName");
        }else if("ORACLE".equals(type)){
            url = "jdbc:oracle:thin:@" + config.getString("hostname") + ":" + config.getString("port") + "/" + config.getString("databaseName");
        }
        connectConfig.put("url",url);
        dataBase.setConnectConfig(connectConfig);
        return dataBase;
    }
}
