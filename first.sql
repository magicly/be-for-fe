create table if not exists users (
  id int auto_increment,
  name varchar(20) not null,
  age int not null,
  wx varchar(20),

  primary key (id)
) engine=InnoDB default charset=utf8;