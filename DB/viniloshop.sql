-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 09-06-2021 a las 12:57:48
-- Versión del servidor: 10.4.8-MariaDB
-- Versión de PHP: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `viniloshop_bd`
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
-- Estructura de tabla para la tabla `cart`
--

CREATE TABLE `cart` (
  `IDUser` varchar(40) NOT NULL,
  `cod_producto` int(200) NOT NULL,
  `cantidad` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `cart`
--

INSERT INTO `cart` (`IDUser`, `cod_producto`, `cantidad`) VALUES
('GOOGLEqOEy3BDlk3Mo90rzXzNkJztMy3F3', 16, '1'),
('paquito59', 15, '3');

--
-- Disparadores `cart`
--
DELIMITER $$
CREATE TRIGGER `update_stcock` AFTER DELETE ON `cart` FOR EACH ROW BEGIN
UPDATE `stock` SET `stock`= stock - old.cantidad WHERE stock.cod_producto = old.cod_producto;
END
$$
DELIMITER ;

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
-- Estructura de tabla para la tabla `compras`
--

CREATE TABLE `compras` (
  `IDUser` varchar(40) NOT NULL,
  `cod_producto` varchar(40) NOT NULL,
  `cantidad` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `compras`
--

INSERT INTO `compras` (`IDUser`, `cod_producto`, `cantidad`) VALUES
('GOOGLEqOEy3BDlk3Mo90rzXzNkJztMy3F3', '16', '1'),
('GITHUB8fzlt8ilm9a9ImKqk0C63JW6gQI3', '133', '3'),
('GITHUB8fzlt8ilm9a9ImKqk0C63JW6gQI3', '133', '7'),
('GITHUB8fzlt8ilm9a9ImKqk0C63JW6gQI3', '21', '1'),
('GITHUB8fzlt8ilm9a9ImKqk0C63JW6gQI3', '24', '1'),
('GITHUB8fzlt8ilm9a9ImKqk0C63JW6gQI3', '133', '4'),
('GITHUB8fzlt8ilm9a9ImKqk0C63JW6gQI3', '16', '1'),
('GITHUB8fzlt8ilm9a9ImKqk0C63JW6gQI3', '24', '1'),
('GITHUB8fzlt8ilm9a9ImKqk0C63JW6gQI3', '133', '2'),
('GITHUB8fzlt8ilm9a9ImKqk0C63JW6gQI3', '16', '2'),
('GITHUB8fzlt8ilm9a9ImKqk0C63JW6gQI3', '24', '9'),
('GITHUB8fzlt8ilm9a9ImKqk0C63JW6gQI3', '133', '10'),
('GITHUB8fzlt8ilm9a9ImKqk0C63JW6gQI3', '24', '10'),
('GITHUB8fzlt8ilm9a9ImKqk0C63JW6gQI3', '133', '10'),
('GITHUB8fzlt8ilm9a9ImKqk0C63JW6gQI3', '21', '1'),
('GITHUB8fzlt8ilm9a9ImKqk0C63JW6gQI3', '18', '10'),
('GITHUB8fzlt8ilm9a9ImKqk0C63JW6gQI3', '6', '1'),
('carrito', '19', '1'),
('carrito', '6', '3'),
('carrito', '6', '2'),
('carrito', '6', '2'),
('carrito', '6', '1'),
('carrito', '6', '2'),
('GITHUB8fzlt8ilm9a9ImKqk0C63JW6gQI3', '133', '1'),
('GITHUB8fzlt8ilm9a9ImKqk0C63JW6gQI3', '133', '2'),
('GITHUB8fzlt8ilm9a9ImKqk0C63JW6gQI3', '6', '2'),
('GITHUB8fzlt8ilm9a9ImKqk0C63JW6gQI3', '16', '4'),
('GITHUB8fzlt8ilm9a9ImKqk0C63JW6gQI3', '133', '6'),
('GITHUB8fzlt8ilm9a9ImKqk0C63JW6gQI3', '133', '6'),
('GITHUB8fzlt8ilm9a9ImKqk0C63JW6gQI3', '21', '1'),
('GITHUB8fzlt8ilm9a9ImKqk0C63JW6gQI3', '133', '6'),
('GITHUB8fzlt8ilm9a9ImKqk0C63JW6gQI3', '21', '1'),
('GITHUB8fzlt8ilm9a9ImKqk0C63JW6gQI3', '16', '1'),
('GITHUB8fzlt8ilm9a9ImKqk0C63JW6gQI3', '15', '2'),
('GITHUB8fzlt8ilm9a9ImKqk0C63JW6gQI3', '133', '2'),
('GITHUB8fzlt8ilm9a9ImKqk0C63JW6gQI3', '21', '1'),
('GITHUB8fzlt8ilm9a9ImKqk0C63JW6gQI3', '21', '1'),
('GITHUB8fzlt8ilm9a9ImKqk0C63JW6gQI3', '133', '1'),
('GITHUB8fzlt8ilm9a9ImKqk0C63JW6gQI3', '16', '1'),
('GITHUB8fzlt8ilm9a9ImKqk0C63JW6gQI3', '6', '1'),
('GITHUB8fzlt8ilm9a9ImKqk0C63JW6gQI3', '17', '1'),
('GITHUB8fzlt8ilm9a9ImKqk0C63JW6gQI3', '133', '1'),
('GITHUB8fzlt8ilm9a9ImKqk0C63JW6gQI3', '133', '1'),
('GITHUB8fzlt8ilm9a9ImKqk0C63JW6gQI3', '21', '1'),
('GITHUB8fzlt8ilm9a9ImKqk0C63JW6gQI3', '133', '10'),
('GITHUB8fzlt8ilm9a9ImKqk0C63JW6gQI3', '133', '2'),
('GITHUB8fzlt8ilm9a9ImKqk0C63JW6gQI3', '6', '5'),
('GITHUB8fzlt8ilm9a9ImKqk0C63JW6gQI3', '21', '10'),
('GITHUB8fzlt8ilm9a9ImKqk0C63JW6gQI3', '16', '1'),
('GITHUB8fzlt8ilm9a9ImKqk0C63JW6gQI3', '16', '2'),
('GITHUB8fzlt8ilm9a9ImKqk0C63JW6gQI3', '15', '2'),
('GITHUB8fzlt8ilm9a9ImKqk0C63JW6gQI3', '17', '10'),
('GITHUB8fzlt8ilm9a9ImKqk0C63JW6gQI3', '21', '1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `favoritos`
--

CREATE TABLE `favoritos` (
  `cod_producto` varchar(200) NOT NULL,
  `IDUser` varchar(40) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `favoritos`
--

INSERT INTO `favoritos` (`cod_producto`, `IDUser`) VALUES
('6', 'GOOGLEW4dJGnnLIDT6Ty2lir3CBJ0S8dZ2'),
('15', 'GOOGLEW4dJGnnLIDT6Ty2lir3CBJ0S8dZ2'),
('16', 'GOOGLEW4dJGnnLIDT6Ty2lir3CBJ0S8dZ2'),
('6', 'GOOGLExi82I0PIfIeXy4AVN6MXpxPNRSr1'),
('15', 'GOOGLExi82I0PIfIeXy4AVN6MXpxPNRSr1'),
('16', 'GOOGLExi82I0PIfIeXy4AVN6MXpxPNRSr1'),
('21', 'GITHUB8fzlt8ilm9a9ImKqk0C63JW6gQI3'),
('943', 'GOOGLExi82I0PIfIeXy4AVN6MXpxPNRSr1'),
('16', 'GITHUB8fzlt8ilm9a9ImKqk0C63JW6gQI3'),
('', 'GOOGLExi82I0PIfIeXy4AVN6MXpxPNRSr1'),
('15', 'GITHUB8fzlt8ilm9a9ImKqk0C63JW6gQI3'),
('6', 'carrito'),
('17', 'GITHUB8fzlt8ilm9a9ImKqk0C63JW6gQI3'),
('19', 'GITHUB8fzlt8ilm9a9ImKqk0C63JW6gQI3'),
('18', 'GITHUB8fzlt8ilm9a9ImKqk0C63JW6gQI3');

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
  `img_grupo` varchar(100) DEFAULT NULL,
  `stock` varchar(40) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `stock`
--

INSERT INTO `stock` (`cod_producto`, `cod_grupo`, `fecha_estreno`, `nombre_grupo`, `nombre_disco`, `estilo_musical`, `cod_compra`, `categoria`, `ruta`, `longitud`, `latitud`, `precio`, `click_count`, `img_grupo`, `stock`) VALUES
(6, '0099', '35/02/2021', 'AC/DC', 'Yhea', 'Rock', 643, 'Camiseta', 'view/images/cami_acdc.jpg', '-74.00597', '40.71427', '150', NULL, 'view\\images\\portada_acdc.jpg', '11'),
(15, '0001', '9/9/9', 'Rolling Stones', 'Black', 'Rock', 7777, 'Disco', 'view/images/rollingdisco1.jpg', '-71.9673386', '	\r\n-13.5226402', '150', NULL, 'view/images/portada_rolling.jpg', '12'),
(16, '0001', '9/9/9', 'Rolling Stones', 'Black', 'Rock', 7777, 'Disco', 'view/images/rollingdisco1.jpg', '-25.03164', '-79.3640', '40', NULL, 'view/images/portada_rolling.jpg', '11'),
(17, '0002', '19/01/2009', 'Metallica', 'Black Widow', 'Rock', 6, 'Vinilo', 'view/images/vinilometallica1.jpg', NULL, NULL, '75', NULL, 'view/images/metal_logo.jpg', '15'),
(18, '0003', '19/01/2019', 'Carl Cox', 'Boiler Room', 'Rock', 6788, 'Vinilo', 'view/images/vinilo.jpg\r\n', NULL, NULL, '75', NULL, 'view/images/cox_logo.png', '9'),
(19, '0049', '19/01/2009', 'Rolling Stones', 'Losing It', 'Rock', 7642, 'Camiseta', 'view/images/rolling.jpg', NULL, NULL, '60', NULL, 'view/images/fish_logo.jpg', '10'),
(21, '0004', '15/05/2019', 'Fito y Fitipaldis', 'Entre la espada y la pared', 'Pop', 946444, 'Camiseta', 'view/images/fitocamiseta.jpg', NULL, NULL, '68', NULL, 'view/images/fito_portada.png', '15'),
(22, '0934', '19/01/2009', 'System Of a Down', 'Warwick', 'Clasica', 6139, 'Disco', 'view/images/discos.jpg', NULL, NULL, '190', NULL, 'view/images/sys_portada.png', '10'),
(23, '0039', '19/01/2009', 'Scorpions', 'Sitlling Loving You', 'Rock', 4374, 'Poster', 'view/images/scorpionsposter.jpg', NULL, NULL, '20', NULL, 'view\\images\\scorpions_portada.jpg', '10'),
(24, '0005', '19/01/2009', 'The Beatles', 'Yesterday', 'Pop', 379, 'Poster', 'view/images/poster.jpg\r\n', NULL, NULL, '70', NULL, 'view/images/beatles_portada.png', '10'),
(66, '0099', '35/02/2021', 'AC/DC', 'Yhea', 'Rock', 643, 'Camiseta', 'view/images/cami_acdc.jpg', '-74.00597', '40.71427', '150', NULL, 'view/images/portada_acdc.jpg', '10'),
(133, '0099', '35/02/2021', 'AC/DC', 'Yhea', 'Rock', 643, 'Camiseta', 'view/images/cami_acdc.jpg', '-74.00597', '40.71427', '150', NULL, 'view/images/portada_acdc.jpg', '10'),
(143, '0099', '35/02/2021', 'AC/DC', 'Yhea', 'Rock', 643, 'Vinilo', 'view/images/acdc.jpg', '-74.00597', '40.71427', '150', NULL, 'view/images/portada_acdc.jpg', '10'),
(183, '0099', '35/02/2021', 'AC/DC', 'Yhea', 'Rock', 643, 'Camiseta', 'view/images/cami_acdc.jpg', '-74.00597', '40.71427', '150', NULL, 'view/images/portada_acdc.jpg', '10'),
(346, '093', '31/12/2010', 'Kase O', 'El valle', 'Rap', 1970, 'Disco', 'view/images/kaseo.jpg', '123', '2324', '40', '0', 'view/images/kaseo.jpg', '10'),
(347, '0942', '31/12/2010', 'Kase O', 'El valle', 'Rap', 1970, 'Disco', 'view/images/kaseo.jpg', '123', '2324', '40', '0', 'view/images/kaseo.jpg', '10'),
(367, '9942', '31/12/2010', 'Beethoven', 'El valle', 'Clasica', 1970, 'Vinilo', 'view/images/beto.jpg', '123', '2324', '40', '0', 'view/images/beto.jpg', '10'),
(543, '0099', '35/02/2021', 'AC/DC', 'Yhea', 'Rock', 643, 'Vinilo', 'view/images/acdc.jpg', '-74.00597', '40.71427', '150', NULL, 'view/images/portada_acdc.jpg', '10'),
(633, '0099', '35/02/2021', 'AC/DC', 'Yhea', 'Rock', 643, 'Camiseta', 'view/images/cami_acdc.jpg', '-74.00597', '40.71427', '150', NULL, 'view/images/portada_acdc.jpg', '10'),
(643, '0099', '35/02/2021', 'AC/DC', 'Yhea', 'Rock', 643, 'Vinilo', 'view/images/acdc.jpg', '-74.00597', '40.71427', '150', NULL, 'view/images/portada_acdc.jpg', '10'),
(666, '0099', '35/02/2021', 'AC/DC', 'Yhea', 'Rock', 643, 'Camiseta', 'view/images/cami_acdc.jpg', '-74.00597', '40.71427', '150', NULL, 'view/images/portada_acdc.jpg', '10'),
(718, '0004', '34/02/2021', 'Fito y Fitipaldis', 'Fito', 'Pop', 913, 'Camiseta', '	\r\nview/images/fitet.jpg', '79.1203', '92.321658', '35', '0', 'view/images/fito_portada.png', '10'),
(768, '0004', '34/02/2021', 'Fito y Fitipaldis', 'Fito', 'Pop', 913, 'Camiseta', '	\r\nview/images/fitet.jpg', '79.1203', '92.321658', '35', '0', 'view/images/fito_portada.png', '10'),
(794, '0009', '34/02/2021', 'Mana', 'Mana', 'Pop', 913, 'Camiseta', '	\r\nview/images/mana.jpg', '79.1203', '92.321658', '35', '0', 'view/images/mana_portada.jpg', '10'),
(798, '0004', '34/02/2021', 'Fito y Fitipaldis', 'Fito', 'Pop', 913, 'Camiseta', '	\r\nview/images/fitet.jpg', '79.1203', '92.321658', '35', '0', 'view/images/fito_portada.png', '10'),
(943, '0099', '35/02/2021', 'AC/DC', 'Yhea', 'Rock', 643, 'Vinilo', 'view/images/acdc.jpg', '-74.00597', '40.71427', '150', NULL, 'view/images/portada_acdc.jpg', '10');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `username` varchar(50) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(500) NOT NULL,
  `tipo` varchar(30) NOT NULL,
  `avatar` varchar(100) NOT NULL,
  `IDUser` varchar(40) NOT NULL,
  `activate` varchar(20) DEFAULT NULL,
  `token` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`username`, `email`, `password`, `tipo`, `avatar`, `IDUser`, `activate`, `token`) VALUES
('prueba56', 'mataix.ab@gmail.com', '$2y$10$mQo9EYFD2iHjew/t/6ZAhuOE7/18vt.XHnb1CxOxv06EvfJeFfOuu', 'cliente', 'https://www.gravatar.com/avatar/c887e3236dd5767e437f0afa7914e1ed?s=40&d=identicon', 'AUTO-090a03827d2e1897426d', 'false', 'e8a8049fe6332d570d94'),
('java1648', 'mataix.ab@gmail.com', '$2y$10$N1H9hhO1ls0bm4AVFuBJLeLyEsJt3Bbc9xxg4PavixRNCznoTghOi', 'cliente', 'https://www.gravatar.com/avatar/4a728fc2deb90251f7e1d6f95d05820c?s=40&d=identicon', 'AUTO-1360fde0c45c8b61bee8', 'true', 'e1495a0840c249634626'),
('agetgd', 'mataix.ab@gmail.com', '$2y$10$2VEYhYjRh7CZdl7PS2/UxuxvGz5dxrJk2BH2m431pUKa1jCUTQot2', 'cliente', 'https://www.gravatar.com/avatar/d768d049fb700a2e7b61151ecdce427a?s=40&d=identicon', 'AUTO-37c4d5a619abb05843bf', 'false', '4e32be46b3a779d94e28'),
('pruebagun', 'mataix.ab@gmail.com', '$2y$10$RYb.xJVX22p1GAHLbUobvOKnKYSvMwAuvFfEl/AR3GLzzzHt9pphy', 'cliente', 'https://www.gravatar.com/avatar/2983da543489edd4218fa895dc3d65ef?s=40&d=identicon', 'AUTO-4a56dfcc0941fe687bd0', 'true', '418bd4698ebf55ed5d9d'),
('asasdasdas', 'mataix.ab@gmail.com', '$2y$10$9BJ/zboz76UFBHQCLbssseUqTZGll2xNIFMPC6aZe8QpsZidrXBJu', 'cliente', 'https://www.gravatar.com/avatar/b070612887d2b1afd69aae905ec47e43?s=40&d=identicon', 'AUTO-519febe8b04220a96a7f', 'false', '557ede2398466ef28a28'),
('pruebaangular', 'mataix.ab@gmail.com', '$2y$10$UK92sl9EcHM6X/1zzEeLu.hgIi2.Gk5aPtEpVkhBC9L4ItQVCBqY6', 'cliente', 'https://www.gravatar.com/avatar/f4bd52e5243f883d711a2e37d343adb1?s=40&d=identicon', 'AUTO-5b2569f8fee05642cb33', 'false', 'b15d7211e043c671a390'),
('qwer', 'mataix.ab@gmail.com', '$2y$10$vHnhoBXo2HpyxqK44acr9urQkxLDqmOgyRAxHLeyDTMhgz6gepX0a', 'cliente', 'https://www.gravatar.com/avatar/962012d09b8170d912f0669f6d7d9d07?s=40&d=identicon', 'AUTO-7537a6c1e151dd993836', 'false', 'ba4ace062da8f5350e11'),
('mataix.ab@gmail.com', 'mataix.ab@gmail.com', '$2y$10$.40OHgNFifbY13CNn8ihP.weF2CwwRtAyIdJ1yR94aSanpRq.vZcS', 'cliente', 'https://www.gravatar.com/avatar/4c2875519a139478af4c635e16c2931c?s=40&d=identicon', 'AUTO-7e6e8dfd5053ba41dc1e', 'false', '1851c8270437a91e3638'),
('paquito59', 'mataix.ab@gmail.com', '$2y$10$SOGyL.lmvQZVrBMDw5UyYehN7k6PAk/2q1lop5QLeTpJYvNKmoEOq', 'cliente', 'https://www.gravatar.com/avatar/b0637119bddd17048fb386188861ee82?s=40&d=identicon', 'AUTO-81fc7329c7686288d3b0', 'false', '480132dbdd7754f28c1a'),
('carrito', 'mataix.ab@gmail.com', '$2y$10$hnPkpQlOcdZfG.3QuXohxeCOowj28MHmjeSpJvAd2hhp0hjJdJQ56', 'cliente', 'https://www.gravatar.com/avatar/815600639d7c8475801b79929bb78380?s=40&d=identicon', 'AUTO-86d011c4ea941456ce37', 'true', 'ee5602be119309cacf9e'),
('EstaSi', 'mataix.ab@gmail.com', '$2y$10$CBZTdSCmJ.qD59ZqnD7VNOQVgmxcwr8S1X2pUHMvoFnWK7/BS09la', 'cliente', 'https://www.gravatar.com/avatar/5f6ea4aefbba48a21c79cf73f0302bf7?s=40&d=identicon', 'AUTO-88966a5695ecf031fc32', 'true', '9f0742b705220c8ba047'),
('prueba7', 'mataix.ab@gmail.com', '$2y$10$u0P4CZO8..Gn32h75JbDB.xx8herW0VyinFwVph31Zw6FHneugc2O', 'cliente', 'https://www.gravatar.com/avatar/157cdf0f08d5de08fd11bcc599bec375?s=40&d=identicon', 'AUTO-8c6332dca5637a40488e', 'false', '4226790498035b41a236'),
('xadxcc', 'mataix.ab@gmail.com', '$2y$10$oMIZ8/hvjT4NlRC38m8.l.WxjQVrd9comfr3Z3escV5UhOy37xSLq', 'cliente', 'https://www.gravatar.com/avatar/a69cb6d672cab91d1e3d1be4c996bc41?s=40&d=identicon', 'AUTO-95b6a83074f8ab318706', 'true', '98bada7527f29d6dc315'),
('pruebaemail', 'mataix.ab@gmail.com', '$2y$10$iaOMGSqkUGl65uT1Tqmv8et4ErAgwZvKFf.9i5EG9ih8/Tq6nUC2a', 'cliente', 'https://www.gravatar.com/avatar/9f518a44447bba2af08f4c0803bb516e?s=40&d=identicon', 'AUTO-ac1949de02381ad9fca5', 'true', '148a5005dceccf8e2970'),
('toaster', 'mataix.ab@gmail.com', '$2y$10$nHq8lhU66lVfxJzD5JKm8eLGLBdOWoAHWIGnm.p4bEKPr0HImibUK', 'cliente', 'https://www.gravatar.com/avatar/2a8fab074793ee27c372198bdaf9a92d?s=40&d=identicon', 'AUTO-ae380cef0adbc17327c7', 'true', '13044a8fb8189e3dcc48'),
('prueba46', 'mataix.ab@gmail.com', '$2y$10$HJ9tP/syLK7RMG.hsr/78e6EJ.rtF6.Qmql30cce1aq5RlXw2Jq4i', 'cliente', 'https://www.gravatar.com/avatar/c8e20cf03b98391ca470bbb96d0b46db?s=40&d=identicon', 'AUTO-c5650b63ee71bb4e258d', 'false', 'd3356a5846df4c88c2d5'),
('belasteguin', 'mataix.ab@gmail.com', '$2y$10$kJ53Zmf2uZh1ysg/wJXpmOAjFYnrWqtVEa/cRL4VYdVhS4oMULGBK', 'cliente', 'https://www.gravatar.com/avatar/242c62f96313ccbb91c2e4b3246a82a9?s=40&d=identicon', 'AUTO-da726174eee055e3b275', 'true', '40801488cd70cbb7a8dd'),
('pruebadefinitiva', 'mataix.ab@gmail.com', '$2y$10$XTfNf3NmYW63Gk6FQsPMk.dNX7E.SY3JRw/qQdDWpxZBWgo.lTh76', 'cliente', 'https://www.gravatar.com/avatar/ff13227b46e1cf4075980268c611dd4d?s=40&d=identicon', 'AUTO-e425461e0d32ec6ec275', 'false', '49aa937f8b2fd3e969a7'),
('tsdvf', 'mataix.ab@gmail.com', '$2y$10$.TvbXnHfIUCeZQt40lO2HO9E.b1z6OEiueIIyq/4YIAzgVPAazxY6', 'cliente', 'https://www.gravatar.com/avatar/04137e04da2efe8cc5ec2266a5aad55c?s=40&d=identicon', 'AUTO-ec341a159a955a70224a', 'false', '56821c4f60e0c24f4912'),
('Abel Mataix ', '', '', 'cliente', 'https://avatars.githubusercontent.com/u/62066419?v=4', 'GITHUB8fzlt8ilm9a9ImKqk0C63JW6gQI3', 'true', ''),
('Antonio Garcia', 'antogarci011@gmail.com', '', 'cliente', 'https://lh3.googleusercontent.com/a/AATXAJwxOqzVxH7dWvp9ogG8rX42D89NPdycQM9VJrKk=s96-c', 'GOOGLEdbVA91yLTEZ9lSyTRuhLyXjVPTY2', 'true', ''),
('Abel Mataix', 'abel4mataix@gmail.com', '', 'cliente', 'https://lh3.googleusercontent.com/a/AATXAJyX6F0yO2dzaBEBgdKSC7tMFij4TO-lMZkoK2iU=s96-c', 'GOOGLEqOEy3BDlk3Mo90rzXzNkJztMy3F3', 'true', ''),
('Abel Mataix Pascual', 'abelclasse6@gmail.com', '', 'cliente', 'https://lh3.googleusercontent.com/a/AATXAJwlY5EemP0lIFD_doONyr5iceyO-ORnrc4duJFG=s96-c', 'GOOGLEW4dJGnnLIDT6Ty2lir3CBJ0S8dZ2', 'true', ''),
('Abel Mataix Pascual', 'mataix.ab@gmail.com', '', 'cliente', 'https://lh3.googleusercontent.com/a-/AOh14GgTWS-aV5Nlhjw3eEGus0xoY7VmXRMVsIOmwfTa=s96-c', 'GOOGLExi82I0PIfIeXy4AVN6MXpxPNRSr1', 'true', '');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cart`
--
ALTER TABLE `cart`
  ADD KEY `cod_producto` (`cod_producto`);

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
  ADD PRIMARY KEY (`IDUser`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `stock`
--
ALTER TABLE `stock`
  MODIFY `cod_producto` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=945;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`cod_producto`) REFERENCES `stock` (`cod_producto`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;