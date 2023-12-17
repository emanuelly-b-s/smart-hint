$strconn = "server=127.0.0.1;uid=root;" + "pwd=32787513Ma!;database=smarthint;";

# dotnet add package Microsoft.EntityFrameworkCore.Design
# dotnet add package Pomelo.EntityFrameworkCore.MySql
# dotnet tool install --global dotnet-ef
dotnet ef dbcontext scaffold $strconn Pomelo.EntityFrameworkCore.MySql --force -o Model