import { Pool } from 'pg';
import { User } from '../models/user';

class UserRepository {
  private db: Pool;

  constructor(db: Pool) {
    this.db = db;
  }

  findAll = async () => {
    const { rows } = await this.db.query(`SELECT *
                                            FROM users`);
    return rows;
  };

  findById = async (id: number) => {
    const { rows } = await this.db.query(`SELECT *
                                            FROM users
                                            WHERE id = $1`, [id]);
    return rows[0];
  };

  save = async (user: User) => {
    const { rows } = await this.db.query(`INSERT INTO users(name, email)
                                            VALUES ($1, $2) RETURNING *`, [user.name, user.email]);
    return rows[0];
  };

  saveById = async (id: number, user: User) => {
    const { rows } = await this.db.query(`UPDATE users
                                            SET name  = COALESCE(NULLIF($1, ''), name),
                                                email = COALESCE(NULLIF($2, ''), email)
                                            WHERE id = $3 RETURNING *`, [user.name, user.email, id]);
    return rows[0];
  };

  delete = async (id: number) => {
    const { rows } = await this.db.query(`DELETE
                                            FROM users
                                            WHERE id = $1 RETURNING *`, [id]);
    return rows[0];
  };

  existsByEmail = async (email: string) => {
    const { rows } = await this.db.query(`SELECT *
                                            FROM users
                                            WHERE email LIKE $1`, [email]);
    return !!rows.length;
  };

  existsByEmailDifferent = async (id: number, email: string) => {
    const { rows } = await this.db.query(`SELECT *
                                            FROM users
                                            WHERE id != $1
                                              AND email LIKE $2`, [id, email]);
    return !!rows.length;
  };
}

export default UserRepository;
