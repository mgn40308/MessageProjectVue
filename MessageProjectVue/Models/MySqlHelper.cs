using MySql.Data.MySqlClient;
using System.Data;

namespace MessageProjectVue.Models
{
    public class MySqlHelper
    {
        private readonly IDbConnection _dbConnection;

        public MySqlHelper(string connectionString)
        {
            _dbConnection = new MySqlConnection(connectionString);
        }


    }
}
