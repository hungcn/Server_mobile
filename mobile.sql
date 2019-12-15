-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 15, 2019 at 12:03 PM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.1.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mobile`
--

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `MSSV` int(11) NOT NULL,
  `HoTen` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`MSSV`, `HoTen`) VALUES
(1712026, 'Lê Trần Hữu Đắc'),
(1712078, 'Ngô Phan Nhật Lâm'),
(1712168, 'Trần Lê Bá Thịnh'),
(1712210, 'Nguyễn Xuân Vỹ'),
(1712214, 'Phạm Hoàng Nhật Anh'),
(1712288, 'Phan Đặng Hoài Bảo'),
(1712336, 'Võ Tấn Đạt'),
(1712360, 'Phạm Hoàng Đức'),
(1712366, 'Huỳnh Quốc Dũng'),
(1712420, 'Phan Gia Hảo'),
(1712475, 'Cao Nhơn Hưng'),
(1712514, 'Trần Quang Khải'),
(1712702, 'Nguyễn Hà Quang'),
(1712747, 'Nguyễn Ngọc Băng Tâm'),
(1712791, 'Lâm Bá Thịnh'),
(1712932, 'Nguyễn Hy Hoài Lâm');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`MSSV`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
