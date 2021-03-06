const { asyncQuery } = require('./');

const Relation = {};

// 商家获取它的所有雇员
Relation.getEmployeeList = async (uid) => {
  try  {
    const sql = 'SELECT * FROM employ_relation WHERE employer = ?';
    const result = await asyncQuery(sql, [uid]);
    return result;
  } catch (e) {
    throw e;
  }

};

// 查询雇员是否在雇佣关系表中
Relation.getEmployee = async (uid) => {
  try  {
    const sql = 'SELECT employer, employee, nickname as nowShop FROM employ_relation e LEFT JOIN user u2 ON e.employer = u2.uid WHERE employee = ?';
    const result = await asyncQuery(sql, [uid]);
    return result;
  } catch (e) {
    throw e;
  }
};

// 增加雇佣关系
Relation.add = async (employer, employee) => {
  const sql = 'INSERT INTO employ_relation (employer, employee) VALUES (?, ?)';
  const result = await asyncQuery(sql, [employer, employee]);
  return result;
};

// 删除雇佣关系
Relation.delete = async (employer, employee) => {
  const sql = 'DELETE FROM employ_relation WHERE employer = ? AND employee = ?';
  const result = await asyncQuery(sql, [employer, employee]);
  return result;
};

module.exports = Relation;