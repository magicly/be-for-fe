drop table if exists users;

create table if not exists users (
  id int auto_increment,
  name varchar(20) not null,
  password varchar(20) not null,
  age int not null default 0,
  wx varchar(20),

  primary key (id),
  unique key(name)
) engine=InnoDB default charset=utf8;