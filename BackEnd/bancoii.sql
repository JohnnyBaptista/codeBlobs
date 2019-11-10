-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 05-Nov-2019 às 01:17
-- Versão do servidor: 10.4.6-MariaDB
-- versão do PHP: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `bancoii`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `attendance`
--

CREATE DATABASE bancoii;

CREATE TABLE `attendance` (
  `att_id` int(11) NOT NULL,
  `member_id` int(11) DEFAULT NULL,
  `meet_id` int(11) DEFAULT NULL,
  `period_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `attendance`
--

INSERT INTO `attendance` (`att_id`, `member_id`, `meet_id`, `period_id`) VALUES
(8, 8, 16, 1),
(9, 9, 16, 1),
(10, 10, 16, 1),
(11, 8, 17, 1),
(12, 9, 17, 1),
(13, 8, 18, 1),
(14, 13, 19, 3),
(15, 14, 19, 1),
(16, 15, 19, 2),
(17, 12, 20, 2);

-- --------------------------------------------------------

--
-- Estrutura da tabela `groups`
--

CREATE TABLE `groups` (
  `group_id` int(11) NOT NULL,
  `group_name` varchar(64) NOT NULL,
  `type_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `groups`
--

INSERT INTO `groups` (`group_id`, `group_name`, `type_id`) VALUES
(9, 'Grupo1', 1),
(10, 'Grupo2', 1),
(11, 'Grupo3', 1),
(12, 'Grupo4', 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `meet`
--

CREATE TABLE `meet` (
  `meet_id` int(11) NOT NULL,
  `meet_description` varchar(100) DEFAULT NULL,
  `group_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `meet`
--

INSERT INTO `meet` (`meet_id`, `meet_description`, `group_id`) VALUES
(16, 'Aula1-grupo1', 9),
(17, 'Aula2-grupo1', 9),
(18, 'Aula3-grupo1', 9),
(19, 'Aula1-grupo2', 10),
(20, 'Aula2-grupo2', 10),
(21, 'Aula1-grupo3', 11),
(22, 'Aula2-grupo3', 11),
(23, 'Aula3-grupo3', 11),
(24, 'Aula4-grupo3', 11),
(25, 'Aula1-grupo4', 12);

-- --------------------------------------------------------

--
-- Estrutura da tabela `member`
--

CREATE TABLE `member` (
  `member_id` int(11) NOT NULL,
  `member_name` varchar(60) DEFAULT NULL,
  `member_description` varchar(255) DEFAULT NULL,
  `group_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `member`
--

INSERT INTO `member` (`member_id`, `member_name`, `member_description`, `group_id`) VALUES
(8, 'Membro1-Grupo1', 'Membro1-Grupo1', 9),
(9, 'Membro2-Grupo1', 'Membro2-Grupo1', 9),
(10, 'Membro3-Grupo1', 'Membro3-Grupo1', 9),
(11, 'Membro4-Grupo1', 'Membro4-Grupo1', 9),
(12, 'Membro1-Grupo2', 'Membro1-Grupo2', 10),
(13, 'Membro2-Grupo2', 'Membro2-Grupo2', 10),
(14, 'Membro3-Grupo2', 'Membro3-Grupo2', 10),
(15, 'Membro4-Grupo2', 'Membro4-Grupo2', 10),
(16, 'Membro1-Grupo3', 'Membro1-Grupo3', 11),
(17, 'Membro2-Grupo3', 'Membro2-Grupo3', 11),
(18, 'Membro3-Grupo3', 'Membro3-Grupo3', 11),
(19, 'Membro4-Grupo3', 'Membro4-Grupo3', 11),
(20, 'Membro1-Grupo4', 'Membro1-Grupo4', 12),
(21, 'Membro2-Grupo4', 'Membro2-Grupo4', 12),
(22, 'Membro3-Grupo4', 'Membro3-Grupo4', 12),
(23, 'Membro4-Grupo4', 'Membro4-Grupo4', 12);

-- --------------------------------------------------------

--
-- Estrutura da tabela `period`
--

CREATE TABLE `period` (
  `period_id` int(11) NOT NULL,
  `period_name` varchar(30) DEFAULT NULL,
  `period_h` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `period`
--

INSERT INTO `period` (`period_id`, `period_name`, `period_h`) VALUES
(1, 'manha', '07:00:00'),
(2, 'tarde', '12:00:00'),
(3, 'noite', '18:00:00');

-- --------------------------------------------------------

--
-- Estrutura da tabela `type`
--

CREATE TABLE `type` (
  `type_id` int(11) NOT NULL,
  `type_name` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `type`
--

INSERT INTO `type` (`type_id`, `type_name`) VALUES
(1, 'corote de morango');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `attendance`
--
ALTER TABLE `attendance`
  ADD PRIMARY KEY (`att_id`),
  ADD KEY `fk_member_id_att` (`member_id`),
  ADD KEY `fk_meet_id_att` (`meet_id`),
  ADD KEY `fk_period_id_att` (`period_id`);

--
-- Índices para tabela `groups`
--
ALTER TABLE `groups`
  ADD PRIMARY KEY (`group_id`),
  ADD KEY `type_id` (`type_id`);

--
-- Índices para tabela `meet`
--
ALTER TABLE `meet`
  ADD PRIMARY KEY (`meet_id`),
  ADD KEY `fk_group_id` (`group_id`);

--
-- Índices para tabela `member`
--
ALTER TABLE `member`
  ADD PRIMARY KEY (`member_id`),
  ADD KEY `fk_grupMember` (`group_id`);

--
-- Índices para tabela `period`
--
ALTER TABLE `period`
  ADD PRIMARY KEY (`period_id`);

--
-- Índices para tabela `type`
--
ALTER TABLE `type`
  ADD PRIMARY KEY (`type_id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `attendance`
--
ALTER TABLE `attendance`
  MODIFY `att_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de tabela `groups`
--
ALTER TABLE `groups`
  MODIFY `group_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de tabela `meet`
--
ALTER TABLE `meet`
  MODIFY `meet_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT de tabela `member`
--
ALTER TABLE `member`
  MODIFY `member_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT de tabela `period`
--
ALTER TABLE `period`
  MODIFY `period_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `type`
--
ALTER TABLE `type`
  MODIFY `type_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `attendance`
--
ALTER TABLE `attendance`
  ADD CONSTRAINT `fk_meet_id_att` FOREIGN KEY (`meet_id`) REFERENCES `meet` (`meet_id`),
  ADD CONSTRAINT `fk_member_id_att` FOREIGN KEY (`member_id`) REFERENCES `member` (`member_id`),
  ADD CONSTRAINT `fk_period_id_att` FOREIGN KEY (`period_id`) REFERENCES `period` (`period_id`);

--
-- Limitadores para a tabela `groups`
--
ALTER TABLE `groups`
  ADD CONSTRAINT `groups_ibfk_1` FOREIGN KEY (`type_id`) REFERENCES `type` (`type_id`);

--
-- Limitadores para a tabela `meet`
--
ALTER TABLE `meet`
  ADD CONSTRAINT `fk_group_id` FOREIGN KEY (`group_id`) REFERENCES `groups` (`group_id`);

--
-- Limitadores para a tabela `member`
--
ALTER TABLE `member`
  ADD CONSTRAINT `fk_grupMember` FOREIGN KEY (`group_id`) REFERENCES `groups` (`group_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
