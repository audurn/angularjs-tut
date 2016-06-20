using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using MySql.Data.MySqlClient;
using System.Configuration;
using System.Web.Script.Serialization;

namespace ConnectToMysql
{
    /// <summary>
    /// Summary description for EmployeeService
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
     [System.Web.Script.Services.ScriptService]
    public class EmployeeService : System.Web.Services.WebService
    {

        [WebMethod]
        public void GetAllEmployees()
        {
            //<NOTE:IMPORTANT> As you are using Mysql database, you have to use MySqlCOnnection, MySqlCommand,
            //MySqlDataReader from MySql.Data.MySql Client 
            List<Employee> listEmployees = new List<Employee>();
            String cs = ConfigurationManager.ConnectionStrings["DBCS"].ConnectionString;
            MySqlConnection con;
            using (con = new MySqlConnection(cs))
            {
                MySqlCommand cmd = new MySqlCommand("select * from employee", con);
                con.Open();
                MySqlDataReader rdr = cmd.ExecuteReader();
                while (rdr.Read())
                {
                    Employee employee = new Employee();
                    employee.id = Convert.ToInt32(rdr["id"]);
                    employee.name = rdr["name"].ToString();
                    employee.gender = rdr["gender"].ToString();
                    employee.salary = Convert.ToInt32(rdr["salary"]);
                    listEmployees.Add(employee);
                }
                JavaScriptSerializer js = new JavaScriptSerializer();
                Context.Response.Write(js.Serialize(listEmployees));
            }
        }
    }
}
