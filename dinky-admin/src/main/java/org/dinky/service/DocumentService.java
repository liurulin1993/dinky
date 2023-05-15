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

package org.dinky.service;

import org.dinky.db.service.ISuperService;
import org.dinky.model.Document;

import java.util.List;

/** DocumentService */
public interface DocumentService extends ISuperService<Document> {

    /**
     * QUERY document fill value by version
     *
     * @param version
     * @return
     */
    List<Document> getFillAllByVersion(String version);

    /**
     * document enable or disable
     *
     * @param id
     * @return
     */
    Boolean enable(Integer id);
}