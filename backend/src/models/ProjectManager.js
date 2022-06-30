const AbstractManager = require("./AbstractManager");

class ProjectManager extends AbstractManager {
  static table = "Project";

  insert(Project) {
    return this.connection.query(
      `insert into ${ProjectManager.table} (title) values (?)`,
      [Project.title]
    );
  }

  update(Project) {
    return this.connection.query(
      `update ${ProjectManager.table} set title = ? where id = ?`,
      [Project.title, Project.id]
    );
  }
}

module.exports = ProjectManager;
