package com.dlink.metadata.driver;

import com.dlink.metadata.convert.DorisTypeConvert;
import com.dlink.metadata.convert.ITypeConvert;
import com.dlink.metadata.query.DorisQuery;
import com.dlink.metadata.query.IDBQuery;

import java.util.HashMap;
import java.util.Map;

public class DorisDriver extends  AbstractJdbcDriver{
    @Override
    public IDBQuery getDBQuery() {
        return new DorisQuery();
    }

    @Override
    public ITypeConvert getTypeConvert() {
        return new DorisTypeConvert();
    }

    @Override
    String getDriverClass() {
        return "com.mysql.cj.jdbc.Driver";
    }

    @Override
    public String getType() {
        return "Doris";
    }

    @Override
    public String getName() {
        return "Doris";
    }

    @Override
    public Map<String,String> getFlinkColumnTypeConversion(){
        return new HashMap<>();
    }
}
