const fs = require('fs');
const getSqlContentMap = require('./../util/get-sql-content');
const { query } = require('./../util/mysql-db');

let sqlContentMap = getSqlContentMap();


// 打印脚本执行日志
const eventLog = function( err , sqlFile, index ) {
    if( err ) {
        console.log(`[ERROR] sql脚本文件: ${sqlFile} 第${index + 1}条脚本 执行失败 o(╯□╰)o ！`)
    } else {
        console.log(`[SUCCESS] sql脚本文件: ${sqlFile} 第${index + 1}条脚本 执行成功 O(∩_∩)O !`)
    }
};

const createAllTables = async () => {
    for( let key in sqlContentMap ) {
        const sqlShell = sqlContentMap[key];
        const sqlShellList = sqlShell.split(';');
    
        for ( let[i, shell] of sqlShellList.entries() ) {
            if (shell.trim()) {
                let result = await query(shell);
                if ( result.serverStatus * 1 === 2 ) {
                    eventLog(null,  key, i);
                } else {
                    eventLog(true,  key, i);
                }
            }
        }
    }
};

createAllTables();