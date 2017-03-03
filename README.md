
README
_____________________________________________________________________________________
This is a README document for iCasei Back-End Developer test.  The description bellow explains whatever steps are necessary to get the application up and running.
Requirements
The basic requirements for iCasei Back-End Developer test to work properly are as follows:

Requirement	Minimum Version
Ruby	2.3.3p222
Rails	5.0.1
MySQL	5.0
Puma	3.0
Bootstrap-sass	3.3.6
Jquery-rails	4.2.2
Mysql2	0.3.18 < 0.5
Sass-rails	5.0
Uglifier	1.3.0
Coffee-rails	4.2
Jquery-datatables-rails	3.4.0
Turbolinks	5
Jbuilder	2.5
Sdoc	0.4.0
Development Environment:
How to improve your development environment for running the application:  
•	MySQL Server (https://dev.mysql.com/doc/mysql-getting-started/en/). It´s an open-source database used in this application. 
* For more information about MySQL services performed: https://dev.mysql.com/
•	MySQL Workbench (https://www.mysql.com/downloads/). It´s provides database design & modeling; SQL development; database administration and database migration. 
•	Rails (http://www.railsinstaller.org/en). It´s used for developing Ruby on Rails applications. 

Database Creation
•	Database for Test:
Create database IcaseiTest_test;
grant all privileges on IcaseiTest_test.* to root@'%' identified by 'password';

•	Database for Development:
Create database IcaseiTest;
grant all privileges on IcaseiTest.* to root@'%' identified by 'password';
If your MySQL Server has different host, username or password, it is necessary  set the file configuration reference: IcaseiTest\config\database.yml
<code>
 <p>username: root</p>
 <p>password: password</p>
 <p>host: localhost</p>
 </code>
<p>The final file will be:<p>
<br>
<code>
default: &default<br>
 adapter: mysql2<br>
 encoding: utf8<br>
 pool: 5<br>
 username: root<br>
 password: password<br>
 host: localhost<br>
 development:<br>
 <<: *default<br>
 database: IcaseiTest<br>
  test:<br>
 <<: *default<br>
 database: IcaseiTest_test<br>
  production:<br>
 <<: *default<br>
 database: IcaseiTest_production<br>
 username: IcaseiTest'<br>
 password: <%= ENV['ICASEITEST_DATABASE_PASSWORD'] %><br>
</code>
<br>
<ul>
	<li><b>Deployment instructions<b></li>
</ul>
This application use GEM to manage bundle install to run. Follow the deployment instructions bellow for Installing:
Run the command in the application's root directory
$ bundle install
Run the command in the application's root directory to create tables in database
$ rails db:migration
Run the command to start the application
$ rails server --binding localhost 
Run the command to perform the test suite
 $ rake -test 
