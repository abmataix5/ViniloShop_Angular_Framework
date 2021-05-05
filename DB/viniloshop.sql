-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-04-2021 a las 22:30:35
-- Versión del servidor: 10.4.8-MariaDB
-- Versión de PHP: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `viniloshop`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `banner`
--

CREATE TABLE `banner` (
  `tipo` varchar(200) NOT NULL,
  `ruta` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `banner`
--

INSERT INTO `banner` (`tipo`, `ruta`) VALUES
('carlcox', 'view/images/carlcox1.jpg'),
('rolling', 'view/images/rolling1.jpg'),
('queen', 'view/images/queen1.jpg'),
('fisher', 'view/images/fisher1.jpg'),
('fisher', 'view/images/radiohead1.png'),
('metallica', 'view/images/metallica1.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `categoria` varchar(200) NOT NULL,
  `ruta` varchar(200) NOT NULL,
  `contador` int(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`categoria`, `ruta`, `contador`) VALUES
('Disco', 'view/images/discos.jpg', 12),
('Camiseta', 'view/images/rolling.jpg ', 3),
('Vinilo', 'view/images/vinilo.jpg', 11),
('Poster', 'view/images/poster.jpg', 10);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `favoritos`
--

CREATE TABLE `favoritos` (
  `username` varchar(200) NOT NULL,
  `cod_producto` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `favoritos`
--

INSERT INTO `favoritos` (`username`, `cod_producto`) VALUES
('abelmataixpas', '6'),
('abelmataixpas', '6'),
('abelmataixpas', '6'),
('abelmataixpas', '15'),
('abelmataixpas', '15'),
('abelmataixpas', '15'),
('abelmataixpas', '16'),
('abelmataixpas', '18'),
('abelmataixpas', '19'),
('abelmataixpas', '15'),
('abelmataixpas', '16'),
('abelmataixpas', '16'),
('abelmataixpas', '15'),
('abelmataixpas', '24');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `stock`
--

CREATE TABLE `stock` (
  `cod_producto` int(200) NOT NULL,
  `cod_grupo` varchar(200) NOT NULL,
  `fecha_estreno` varchar(200) NOT NULL,
  `nombre_grupo` varchar(200) NOT NULL,
  `nombre_disco` varchar(200) NOT NULL,
  `estilo_musical` char(50) DEFAULT NULL,
  `cod_compra` int(200) DEFAULT NULL,
  `categoria` varchar(200) DEFAULT NULL,
  `ruta` varchar(200) DEFAULT NULL,
  `longitud` varchar(200) DEFAULT NULL,
  `latitud` varchar(200) DEFAULT NULL,
  `precio` varchar(200) DEFAULT NULL,
  `click_count` varchar(20) DEFAULT NULL,
  `img_grupo` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `stock`
--

INSERT INTO `stock` (`cod_producto`, `cod_grupo`, `fecha_estreno`, `nombre_grupo`, `nombre_disco`, `estilo_musical`, `cod_compra`, `categoria`, `ruta`, `longitud`, `latitud`, `precio`, `click_count`, `img_grupo`) VALUES
(6, '0099', '35/02/2021', 'AC/DC', 'Yhea', 'Rock', 643, 'Camiseta', 'view/images/cami_acdc.jpg', '-74.00597', '40.71427', '150', NULL, 'view\\images\\portada_acdc.jpg'),
(15, '0001', '9/9/9', 'Rolling Stones', 'Black', 'Rock', 7777, 'Disco', 'view/images/rollingdisco1.jpg', '-71.9673386', '	\r\n-13.5226402', '150', NULL, 'view/images/portada_rolling.jpg'),
(16, '0001', '9/9/9', 'Rolling Stones', 'Black', 'Rock', 7777, 'Disco', 'view/images/rollingdisco1.jpg', '-25.03164', '-79.3640', '40', NULL, 'view/images/portada_rolling.jpg'),
(17, '0002', '19/01/2009', 'Metallica', 'Black Widow', 'Rock', 6, 'Vinilo', 'view/images/vinilometallica1.jpg', NULL, NULL, '75', NULL, 'view/images/metal_logo.jpg'),
(18, '0003', '19/01/2019', 'Carl Cox', 'Boiler Room', 'Rock', 6788, 'Vinilo', 'view/images/vinilo.jpg\r\n', NULL, NULL, '75', NULL, 'view/images/cox_logo.png'),
(19, '0049', '19/01/2009', 'Rolling Stones', 'Losing It', 'Rock', 7642, 'Camiseta', 'view/images/rolling.jpg', NULL, NULL, '60', NULL, 'view/images/fish_logo.jpg'),
(21, '0004', '15/05/2019', 'Fito y Fitipaldis', 'Entre la espada y la pared', 'Pop', 946444, 'Camiseta', 'view/images/fitocamiseta.jpg', NULL, NULL, '68', NULL, 'view/images/fito_portada.png'),
(22, '0934', '19/01/2009', 'System Of a Down', 'Warwick', 'Clasica', 6139, 'Disco', 'view/images/discos.jpg', NULL, NULL, '190', NULL, 'view/images/sys_portada.png'),
(23, '0039', '19/01/2009', 'Scorpions', 'Sitlling Loving You', 'Rock', 4374, 'Poster', 'view/images/scorpionsposter.jpg', NULL, NULL, '20', NULL, 'view\\images\\scorpions_portada.jpg'),
(24, '0005', '19/01/2009', 'The Beatles', 'Yesterday', 'Pop', 379, 'Poster', 'view/images/poster.jpg\r\n', NULL, NULL, '70', NULL, 'view/images/beatles_portada.png'),
(66, '0099', '35/02/2021', 'AC/DC', 'Yhea', 'Rock', 643, 'Camiseta', 'view/images/cami_acdc.jpg', '-74.00597', '40.71427', '150', NULL, 'view/images/portada_acdc.jpg'),
(133, '0099', '35/02/2021', 'AC/DC', 'Yhea', 'Rock', 643, 'Camiseta', 'view/images/cami_acdc.jpg', '-74.00597', '40.71427', '150', NULL, 'view/images/portada_acdc.jpg'),
(143, '0099', '35/02/2021', 'AC/DC', 'Yhea', 'Rock', 643, 'Vinilo', 'view/images/acdc.jpg', '-74.00597', '40.71427', '150', NULL, 'view/images/portada_acdc.jpg'),
(183, '0099', '35/02/2021', 'AC/DC', 'Yhea', 'Rock', 643, 'Camiseta', 'view/images/cami_acdc.jpg', '-74.00597', '40.71427', '150', NULL, 'view/images/portada_acdc.jpg'),
(543, '0099', '35/02/2021', 'AC/DC', 'Yhea', 'Rock', 643, 'Vinilo', 'view/images/acdc.jpg', '-74.00597', '40.71427', '150', NULL, 'view/images/portada_acdc.jpg'),
(633, '0099', '35/02/2021', 'AC/DC', 'Yhea', 'Rock', 643, 'Camiseta', 'view/images/cami_acdc.jpg', '-74.00597', '40.71427', '150', NULL, 'view/images/portada_acdc.jpg'),
(643, '0099', '35/02/2021', 'AC/DC', 'Yhea', 'Rock', 643, 'Vinilo', 'view/images/acdc.jpg', '-74.00597', '40.71427', '150', NULL, 'view/images/portada_acdc.jpg'),
(666, '0099', '35/02/2021', 'AC/DC', 'Yhea', 'Rock', 643, 'Camiseta', 'view/images/cami_acdc.jpg', '-74.00597', '40.71427', '150', NULL, 'view/images/portada_acdc.jpg'),
(718, '0004', '34/02/2021', 'Fito y Fitipaldis', 'Fito', 'Pop', 913, 'Camiseta', '	\r\nview/images/fitet.jpg', '79.1203', '92.321658', '35', '0', 'view/images/fito_portada.png'),
(768, '0004', '34/02/2021', 'Fito y Fitipaldis', 'Fito', 'Pop', 913, 'Camiseta', '	\r\nview/images/fitet.jpg', '79.1203', '92.321658', '35', '0', 'view/images/fito_portada.png'),
(794, '0009', '34/02/2021', 'Mana', 'Mana', 'Pop', 913, 'Camiseta', '	\r\nview/images/mana.jpg', '79.1203', '92.321658', '35', '0', 'view/images/mana_portada.jpg'),
(798, '0004', '34/02/2021', 'Fito y Fitipaldis', 'Fito', 'Pop', 913, 'Camiseta', '	\r\nview/images/fitet.jpg', '79.1203', '92.321658', '35', '0', 'view/images/fito_portada.png'),
(943, '0099', '35/02/2021', 'AC/DC', 'Yhea', 'Rock', 643, 'Vinilo', 'view/images/acdc.jpg', '-74.00597', '40.71427', '150', NULL, 'view/images/portada_acdc.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `username` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(500) NOT NULL,
  `tipo` varchar(30) NOT NULL,
  `avatar` varchar(100) NOT NULL,
  `IDUser` varchar(40) DEFAULT NULL,
  `activate` varchar(20) DEFAULT NULL,
  `token` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`username`, `email`, `password`, `tipo`, `avatar`, `IDUser`, `activate`, `token`) VALUES
('abelmataixpas', 'abelclasse6@gmail.com', '$2y$10$g3uYZHqESZQkm7GnyGyJl.paXvuPQ/pog0EQqQA9yF1iavO.BE7MK', 'client', 'https://www.gravatar.com/avatar/d497b4096b82cf63945c7045ca4a146d?s=40&d=identicon', NULL, NULL, NULL),
('abelmataixpasaa', 'abelclasse6@gmail.com', '$2y$10$5rzs2EKo.wQvwZvW4QUL3unHyQgbUQphXBPWrylCBEw/0yShlg722', 'cliente', 'https://www.gravatar.com/avatar/881fea004f0a1e06fe53853512bb4274?s=40&d=identicon', 'AUTO-62c400ce5d', 'false', 'b89b65f72a75f8ebdfce'),
('abelmataixpasafgv', 'mataix.ab@gmail.com', '$2y$10$Atk4ua/TlDyIBlbL6Z5MeO06pQdude085b1HuGQ6vKoKcjEDjpww.', 'cliente', 'https://www.gravatar.com/avatar/273e99e2e9c53cf3063b27800f9c6bc5?s=40&d=identicon', 'AUTO-1400cb6553', 'false', 'fdddaac4e4631852c4dd'),
('abelmataixpasasas', 'abelclasse6@gmail.com', '$2y$10$BHLHNpnkAgVlr83GnIeewuqmL6ytFq/XufBsFzrajAf9Hgw/XEz.S', 'cliente', 'https://www.gravatar.com/avatar/783389bfc24a3ea00bea711382adb6eb?s=40&d=identicon', 'AUTO-b511e53b99', 'false', '0b323d17a4f3981fb91a'),
('abelmataixpasasasasas', 'abelclasse6@gmail.com', '$2y$10$7HZoqlGy3EZfvmEWWvwZiO3oEgcDzo.ewZ6.5s/vSpvyjHD.PVh1C', 'cliente', 'https://www.gravatar.com/avatar/9ead41d33c5be82d5b40641c9a8b03ee?s=40&d=identicon', 'AUTO-2f4d86137f', 'false', 'd17c4fa281b9b6e4f035'),
('abelmataixpasassa', 'abelclasse6@gmail.com', '$2y$10$P.782QKBj8eDNgz8BgRi1.U9KXKSD5LppV4cujGLxa9IxhodB.3MK', 'cliente', 'https://www.gravatar.com/avatar/bf3645e1f474cd95a7870a71fa94918b?s=40&d=identicon', 'AUTO-6773d4ae92', 'false', '6380d07fdbec25fe42ab'),
('abelmataixpasfwd', 'abelclasse6@gmail.com', '$2y$10$thp4nLbA0uMnrikTZ2MIMunFTPhxyYnmiQfa4XuqN4sR/5ppyHx4a', 'cliente', 'https://www.gravatar.com/avatar/3c09c5c91cd37b0d4931d9410028af4a?s=40&d=identicon', 'AUTO-a005b02935', 'false', 'c615a099dc5adb28d5ef'),
('admin', 'mato@gmail.com', '$2y$10$UxFmh551RwQa/Eu2MeGqU.WZTul86W2K3JqfupcM065xhiTBeL3de', 'admin', 'https://www.gravatar.com/avatar/21232f297a57a5a743894a0e4a801fc3?s=40&d=identicon', NULL, NULL, NULL),
('aeffa', 'abelclasse6@gmail.com', '$2y$10$gaAc55LkVNEsC8ShTK8I6.V0W5.cN/r4/7iXa5HOS/DJRzA2Gj81u', 'cliente', 'https://www.gravatar.com/avatar/48b80ff181779ff2d7a408f92548359d?s=40&d=identicon', 'AUTO-c461a3a0a2', 'false', '18f8582c3665bd4b326f'),
('aporeelllo', 'mataix.ab@gmail.com', '$2y$10$wpws4kV9BJe9tlyO6tJo8OT2InrvOuC4Je0XTl6RoGHA.bTE0qrJG', 'cliente', 'https://www.gravatar.com/avatar/6cdd9c8ca97c7fafe8a6536cbe470900?s=40&d=identicon', 'AUTO-8094e5dbd09c8becf07c', 'true', '379940598fb81eaeb495'),
('olaola', 'mataix.ab@gmail.com', '$2y$10$bou/vWxiDLkRcE8m3PYX/uyPf9xoyIjFRdlpJWuGRW2AHhbIJL7am', 'cliente', 'https://www.gravatar.com/avatar/236d1336e98985dce3a625d46aebfd02?s=40&d=identicon', 'AUTO-2d72f1861e96124fbd78', 'true', '9aa17dc19c045a02ecda'),
('oleole', 'mataix.ab@gmail.com', '$2y$10$UfnI/VFTwEMdfZbMiM.8ru//sgepaXX/Kvkk4oxG/MgnLugT1lrN2', 'cliente', 'https://www.gravatar.com/avatar/bfe20ca83cf931d29a95a28e308e80d7?s=40&d=identicon', 'AUTO-d5af2c35232059fa8946', 'false', '5062242d8f7265702326'),
('oles', 'mataix.ab@gmail.com', '$2y$10$46ygpS3KkX6rsyEfO6r0suUdAKtl3xgdHl7KlA.NEqzpNjzmILZ9q', 'cliente', 'https://www.gravatar.com/avatar/fe93d56bb67bdaff9cc40e0b5bfb9560?s=40&d=identicon', 'AUTO-1459a7d8c288231b5cfa', 'false', '06577a600bd8a37cb95b'),
('palad', 'mataix.ab@gmail.com', '$2y$10$dLb/G66rjlauc06nSgxn/uLzAozNA3cAjPSZ0..RSLIi1vmcu8UaW', 'cliente', 'https://www.gravatar.com/avatar/79334920eb6ca0dd4e6ae65d39f56370?s=40&d=identicon', 'AUTO-1152bfa73d8b0cba243b', 'false', '6dae8f8b16ecbb9e5abc'),
('pruebadefinitiva', 'mataix.ab@gmail.com', '$2y$10$XTfNf3NmYW63Gk6FQsPMk.dNX7E.SY3JRw/qQdDWpxZBWgo.lTh76', 'cliente', 'https://www.gravatar.com/avatar/ff13227b46e1cf4075980268c611dd4d?s=40&d=identicon', 'AUTO-e425461e0d32ec6ec275', 'false', '49aa937f8b2fd3e969a7'),
('pruebaemail', 'mataix.ab@gmail.com', '$2y$10$iaOMGSqkUGl65uT1Tqmv8et4ErAgwZvKFf.9i5EG9ih8/Tq6nUC2a', 'cliente', 'https://www.gravatar.com/avatar/9f518a44447bba2af08f4c0803bb516e?s=40&d=identicon', 'AUTO-ac1949de02381ad9fca5', 'true', '148a5005dceccf8e2970'),
('pruebagun', 'mataix.ab@gmail.com', '$2y$10$RYb.xJVX22p1GAHLbUobvOKnKYSvMwAuvFfEl/AR3GLzzzHt9pphy', 'cliente', 'https://www.gravatar.com/avatar/2983da543489edd4218fa895dc3d65ef?s=40&d=identicon', 'AUTO-4a56dfcc0941fe687bd0', 'true', '418bd4698ebf55ed5d9d');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `stock`
--
ALTER TABLE `stock`
  ADD PRIMARY KEY (`cod_producto`),
  ADD KEY `cod_compra` (`cod_compra`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`username`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `stock`
--
ALTER TABLE `stock`
  MODIFY `cod_producto` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=944;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
