# Consuming ASP.Net web service in AngularJS with $http
<pre>This tutorial requires visual Studio. I have used VS 2015.
I am using MySql server. So steps are bit different.
Steps:
1. Create new ASP.NET web application. 
2. From 'Manage NuGet packages', install MySql.Data package.
3. Create new web service(Refer to 'EmployeeService.asmx.cs' file). Also add 'Employee.cs'.
4. Edit web.config file. Add ConnectionString item. (refer 'web.config').
5. Make changes in script.js file as:
	.controller('myController', function ($scope, $http) {
                    $http.get('EmployeeService.asmx/GetAllEmployees')
                    .then(function (response) {
                        $scope.employees = response.data;
                    });
6. Here we have used get method of $http. But our service is accessible via post request(By Default).
   So to be able to use 'get', add following in web.config
   <webServices>
      <protocols><add name="HttpGet"/></protocols>
   </webServices>                  
7. Make appropriate changes in view(index.html here.)

That's it. Run your project. </pre>
