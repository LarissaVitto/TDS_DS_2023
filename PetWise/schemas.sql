CREATE TABLE `donos` (
  `id` INT AUTO_INCREMENT,
  `nome_donos` VARCHAR(100),
  `cpf` VARCHAR(11),
  `telefone` VARCHAR(20),
  `email` VARCHAR(100),
  PRIMARY KEY (`id`)
);

CREATE TABLE `pets` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `nome` VARCHAR(100),
  `idade` INT,
  `raca` VARCHAR(100),
  `peso` DECIMAL(5,2),
  `porte` VARCHAR(50),
  `dono_id` INT,
  FOREIGN KEY (`dono_id`) REFERENCES donos(`id`)
);

insert into
    `donos` {
        `id`
        `nome_donos`
        `cpf`
        `telefone`
        `email`
    }

insert into
    `pets` (
        `id`
        `nome`
        `idade`
        `raca`
        `peso`
        `porte`
        `dono_id`
    )