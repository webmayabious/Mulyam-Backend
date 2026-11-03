-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 03, 2026 at 01:31 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mulyam`
--

-- --------------------------------------------------------

--
-- Table structure for table `aboutus`
--

CREATE TABLE `aboutus` (
  `id` int(11) NOT NULL,
  `heading` varchar(255) NOT NULL,
  `description` longtext NOT NULL,
  `imageUrl` varchar(255) NOT NULL,
  `isActive` tinyint(1) DEFAULT 1,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `aboutus`
--

INSERT INTO `aboutus` (`id`, `heading`, `description`, `imageUrl`, `isActive`, `createdAt`, `updatedAt`) VALUES
(1, 'ABOUT US', '<p>We at Mulyam, combine deep real estate expertise with advanced PropTech solutions to help developers sell smarter and faster. Backed by over 20 years of industry knowledge, our leadership brings strong market intelligence and strategic insight to every project. We offer end-to-end services spanning market research, branding, marketing strategy, sales, and CRM management under one integrated platform.</p><p>We go beyond traditional marketing, offering a complete ecosystem that includes targeted lead generation, CRM-driven sales management, and immersive 3D experiences. From positioning a project to closing sales, we create seamless pathways that connect the right buyers to the right properties.</p>', '/uploads/about/about-1793697136125-311683212.jpg', 1, '2026-11-03 09:12:16', '2026-11-03 09:12:16'),
(2, 'A UNIFIED REAL ESTATE ECOSYSTEM', '<p>From market research and branding to sales, conversion, and CRM, we bring every real estate function under one roof, ensuring alignment, transparency, and faster execution at every stage.</p>', '/uploads/about/about-1793697136129-658793494.jpg', 1, '2026-11-03 09:12:16', '2026-11-03 09:12:16'),
(3, 'DELIVERING OUTCOMES DRIVEN BY INSIGHTS', '<p>By integrating data, digital tools, and deep insight, we eliminate complexity, reduce delays, and enable smarter decisions, transforming real estate from a transaction into a seamless, meaningful experience.</p><p>Finding the right property shouldn\'t mean navigating the entire real estate market alone. Mulyam helps homebuyers and investors discover, compare and evaluate property opportunities based on what matters to them, from budget, location and configuration to amenities, connectivity, possession timelines and long-term objectives.</p><p>Instead of exploring projects one by one, Mulyam brings relevant properties together, helping customers:</p><ul><li>Shortlist suitable options</li><li>Compare projects</li><li>Understand the overall cost</li></ul><p>Its technology-enabled approach records preferences, tracks interactions and helps deliver more personalized property recommendations.</p><p>From new launches and emerging locations to established projects, Mulyam helps customers stay informed about opportunities that match their requirements. It can also support the journey through site-visit coordination, project information, commercial discussions and purchase-stage coordination.</p>', '/uploads/about/about-1793697136131-914680606.jpg', 1, '2026-11-03 09:12:16', '2026-11-03 09:12:16');

-- --------------------------------------------------------

--
-- Table structure for table `about_mission_vision`
--

CREATE TABLE `about_mission_vision` (
  `id` int(11) NOT NULL,
  `imageUrl` varchar(255) NOT NULL,
  `heading` varchar(255) NOT NULL,
  `description` longtext NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `about_our_ventures`
--

CREATE TABLE `about_our_ventures` (
  `id` int(11) NOT NULL,
  `imageUrl` varchar(255) NOT NULL,
  `heading` varchar(255) NOT NULL,
  `description` longtext NOT NULL,
  `isActive` tinyint(1) DEFAULT 1,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `about_our_ventures`
--

INSERT INTO `about_our_ventures` (`id`, `imageUrl`, `heading`, `description`, `isActive`, `createdAt`, `updatedAt`) VALUES
(1, '/uploads/about/about-1793697218857-996017952.jpg', 'Mayabious Group', 'A multidisciplinary MarTech and AdTech design studio bringing ideas to life across diverse mediums. We blend strategy, design, technology and storytelling to create impactful brand experiences. From the first stroke of an identity to the final frame of a visualisation, every detail carries our signature. Different mediums, one unwavering standard of craftsmanship.', 1, '2026-11-03 09:13:38', '2026-11-03 09:13:38'),
(2, '/uploads/about/about-1793697218857-472491171.jpg', 'Matratech', 'A future-focused MarTech company creating immersive experiences through emerging technologies. From AR, VR, MR and holography to IoT and advanced simulations, we make technology more experiential. Driven by R&D and innovation, we build intelligent solutions that connect brands with their audiences. We transform emerging technology into meaningful experiences.', 1, '2026-11-03 09:13:38', '2026-11-03 09:13:38'),
(3, '/uploads/about/about-1793697218857-864049358.jpg', 'Madhya Design', 'An architectural design studio exploring a harmonious relationship between built spaces and nature. Our approach seeks to balance human needs with the ecological context around them. Through thoughtful architecture and landscape-led design, we bridge modernity with greenery to design spaces where people and nature coexist.', 1, '2026-11-03 09:13:38', '2026-11-03 09:13:38'),
(4, '/uploads/about/about-1793697218857-687470083.jpg', 'Mokhsh', 'A smart CRM and business management platform built to bring teams, workflows and customer relationships together. From lead management and project coordination to HR, operations and team communication, Mokhsh connects it all in one place. Designed to reduce repetitive work and information overload, it helps businesses stay organised, responsive and efficient.', 1, '2026-11-03 09:13:38', '2026-11-03 09:13:38');

-- --------------------------------------------------------

--
-- Table structure for table `about_teams`
--

CREATE TABLE `about_teams` (
  `id` int(11) NOT NULL,
  `imageUrl` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `designation` varchar(255) NOT NULL,
  `description` longtext NOT NULL,
  `isActive` tinyint(1) DEFAULT 1,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `about_teams`
--

INSERT INTO `about_teams` (`id`, `imageUrl`, `name`, `designation`, `description`, `isActive`, `createdAt`, `updatedAt`) VALUES
(1, '/uploads/about/about-1793697189566-896419389.jpg', 'Rahul Dey', 'Vivamus Efficitur', 'Maecenas et erat ac tellus malesuada convallis. Praesent tincidunt et enim ac fringilla. Suspendisse potenti. Integer volutpat tempor mauris vel tristique. Aenean non sagittis tellus. Integer sit amet eros...', 1, '2026-11-03 09:13:09', '2026-11-03 09:13:09'),
(2, '/uploads/about/about-1793697189569-753723051.jpg', 'Sudipta Roy', 'Vivamus Efficitur', 'In rutrum dui libero, ac tempor massa ornare non. In nec iaculis augue. Donec volutpat dui ipsum, sed faucibus arcu aliquam consequat. Duis et molestie lorem, eu cursus tellus. Curabitur mollis...', 1, '2026-11-03 09:13:09', '2026-11-03 09:13:09'),
(3, '/uploads/about/about-1793697189573-769660697.jpg', 'Gargi Bose', 'Vivamus Efficitur', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mollis mauris vitae consectetur laoreet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam non...', 1, '2026-11-03 09:13:09', '2026-11-03 09:13:09'),
(4, '/uploads/about/about-1793697189576-64310918.jpg', 'Koyel Deyashi', 'Vivamus Efficitur', 'Quisque hendrerit placerat molestie. Duis et tortor molestie, pulvinar nisl dapibus, tincidunt arcu. Nullam bibendum pulvinar orci at volutpat. Suspendisse porttitor imperdiet eros, in sollicitudin erat faucibus in...', 1, '2026-11-03 09:13:09', '2026-11-03 09:13:09'),
(5, '/uploads/about/about-1793697189579-403922879.jpg', 'Sounak Paul', 'Vivamus Efficitur', 'Nullam sodales purus eu consectetur porttitor. Nam arcu ligula, consectetur a molestie at, placerat eu erat. Curabitur rhoncus libero ut sapien lobortis finibus sed eu sed ex. Donec accumsan elit vitae...', 1, '2026-11-03 09:13:09', '2026-11-03 09:13:09'),
(6, '/uploads/about/about-1793697189599-692659113.jpg', 'Anindita Hazra', 'Vivamus Efficitur', 'Sed maximus ligula at ante pharetra, a finibus felis eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac consequat lacus, quis fringilla ipsum. Phasellus pharetra alique...', 1, '2026-11-03 09:13:09', '2026-11-03 09:13:09');

-- --------------------------------------------------------

--
-- Table structure for table `about_team_intros`
--

CREATE TABLE `about_team_intros` (
  `id` int(11) NOT NULL,
  `heading` varchar(255) NOT NULL,
  `description` longtext NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `status` varchar(255) DEFAULT '1' COMMENT '1 = active, 0 = inactive',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `name`, `username`, `password`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Pol', 'Pol', '$2b$10$YNcFAOw12VCYjKOFU8OajOYLeOHxAdqBYU9FlWc4pfCC2w4uoxWmK', '1', '2026-11-03 09:08:25', '2026-11-03 09:08:25');

-- --------------------------------------------------------

--
-- Table structure for table `amenities`
--

CREATE TABLE `amenities` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `amenities`
--

INSERT INTO `amenities` (`id`, `title`, `created_at`, `updated_at`) VALUES
(1, 'Lift', '2026-10-30 10:14:00', '2026-10-30 10:14:00'),
(2, 'Parking', '2026-10-30 10:14:00', '2026-10-30 10:14:00'),
(3, 'Vaastu Complaint', '2026-10-30 10:14:00', '2026-10-30 10:14:00'),
(4, 'Power Backup', '2026-10-30 10:14:00', '2026-10-30 10:14:00'),
(5, 'Park', '2026-10-30 10:14:00', '2026-10-30 10:14:00'),
(6, 'test-1', '2026-11-02 11:48:36', '2026-11-02 11:48:36');

-- --------------------------------------------------------

--
-- Table structure for table `blogs`
--

CREATE TABLE `blogs` (
  `id` int(11) NOT NULL,
  `image` varchar(500) DEFAULT NULL,
  `author` varchar(150) DEFAULT NULL,
  `post_date` date NOT NULL,
  `reading_time` varchar(50) DEFAULT NULL,
  `title` varchar(255) NOT NULL,
  `heading` varchar(255) DEFAULT NULL,
  `sub_heading` varchar(255) DEFAULT NULL,
  `blog_type` varchar(100) DEFAULT NULL,
  `description` longtext NOT NULL,
  `is_active` tinyint(1) DEFAULT 1,
  `is_popular_post` tinyint(1) DEFAULT 0,
  `display_on_home_page` tinyint(1) DEFAULT 0,
  `category` varchar(100) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `blogs`
--

INSERT INTO `blogs` (`id`, `image`, `author`, `post_date`, `reading_time`, `title`, `heading`, `sub_heading`, `blog_type`, `description`, `is_active`, `is_popular_post`, `display_on_home_page`, `category`, `created_at`, `updated_at`) VALUES
(1, '/uploads/blogs/blog-1793697105654-107353292.jpg', 'Sunita Das', '2026-08-29', '5 min', 'Best Locations for NRIs Investing in Siliguri', 'BEST LOCATIONS FOR NRIS INVESTING IN SILIGURI', 'Siliguri Property Prices: A Location-Wise Snapshot', 'Article', '<p>Siliguri is opening a new chapter in real estate investment. Positioned as the gateway to North Bengal, the Northeast and the Himalayan region, the city combines strong connectivity, expanding infrastructure, premium residential developments and diverse investment opportunities.</p><p>For NRIs, Siliguri offers something particularly valuable: the ability to invest in a growing city while staying connected to major transport hubs, commercial centres and lifestyle destinations.</p>', 1, 1, 1, NULL, '2026-11-03 09:11:45', '2026-11-03 09:11:45');

-- --------------------------------------------------------

--
-- Table structure for table `brochure`
--

CREATE TABLE `brochure` (
  `id` int(11) NOT NULL,
  `popertydetails_id` int(11) DEFAULT NULL,
  `brochure_file` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `brochure`
--

INSERT INTO `brochure` (`id`, `popertydetails_id`, `brochure_file`, `created_at`, `updated_at`) VALUES
(3, 3, '1793355284211-DocScanner 24-Aug-2026 9-16 am.pdf', '2026-10-30 10:14:44', '2026-10-30 10:14:44'),
(4, 4, '1793439823173-DocScanner 24-Aug-2026 9-16 am.pdf', '2026-10-31 09:43:43', '2026-10-31 09:43:43'),
(5, 5, '1793446816243-DocScanner 24-Aug-2026 9-16 am.pdf', '2026-10-31 11:40:16', '2026-10-31 11:40:16');

-- --------------------------------------------------------

--
-- Table structure for table `constructionstatus`
--

CREATE TABLE `constructionstatus` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `constructionstatus`
--

INSERT INTO `constructionstatus` (`id`, `title`, `created_at`, `updated_at`) VALUES
(1, 'New Launch', '2026-10-30 10:13:40', '2026-10-30 10:13:40'),
(2, 'Under  Construction', '2026-10-30 10:13:40', '2026-10-30 10:13:40'),
(3, 'Ready to Move', '2026-10-30 10:13:40', '2026-10-30 10:13:40'),
(4, 'test-1', '2026-11-02 11:50:07', '2026-11-02 11:50:07');

-- --------------------------------------------------------

--
-- Table structure for table `contactus`
--

CREATE TABLE `contactus` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contactus`
--

INSERT INTO `contactus` (`id`, `title`, `description`, `image`, `created_at`, `updated_at`) VALUES
(2, 'lets find your next address', 'wheather you are looking for your nwxt home expoliring a commercial space or seeking guidance on a poperty', '1793703411483.jpg', '2026-11-03 10:56:51', '2026-11-03 10:56:51'),
(3, 'lets find your next address', 'wheather you are looking for your nwxt home expoliring a commercial space or seeking guidance on a poperty', '1793703454663.jpg', '2026-11-03 10:57:34', '2026-11-03 10:57:34');

-- --------------------------------------------------------

--
-- Table structure for table `floorplan`
--

CREATE TABLE `floorplan` (
  `id` int(11) NOT NULL,
  `popertydetails_id` int(11) DEFAULT NULL,
  `floor_image` varchar(255) DEFAULT NULL,
  `floor_position` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `floorplan`
--

INSERT INTO `floorplan` (`id`, `popertydetails_id`, `floor_image`, `floor_position`, `created_at`, `updated_at`) VALUES
(7, 3, '1793355284192-IMG-20261014-WA0017.jpg', 1, '2026-10-30 10:14:44', '2026-10-30 10:14:44'),
(8, 3, '1793355284193-IMG-20261014-WA0019.jpg', 2, '2026-10-30 10:14:44', '2026-10-30 10:14:44'),
(9, 3, '1793355284193-IMG-20261014-WA0018.jpg', 3, '2026-10-30 10:14:44', '2026-10-30 10:14:44'),
(10, 4, '1793439823159-IMG-20261014-WA0017.jpg', 1, '2026-10-31 09:43:43', '2026-10-31 09:43:43'),
(11, 4, '1793439823159-IMG-20261014-WA0019.jpg', 2, '2026-10-31 09:43:43', '2026-10-31 09:43:43'),
(12, 4, '1793439823159-IMG-20261014-WA0018.jpg', 3, '2026-10-31 09:43:43', '2026-10-31 09:43:43'),
(13, 5, '1793446816232-IMG-20261014-WA0017.jpg', 1, '2026-10-31 11:40:16', '2026-10-31 11:40:16'),
(14, 5, '1793446816232-IMG-20261014-WA0019.jpg', 2, '2026-10-31 11:40:16', '2026-10-31 11:40:16'),
(15, 5, '1793446816233-IMG-20261014-WA0018.jpg', 3, '2026-10-31 11:40:16', '2026-10-31 11:40:16');

-- --------------------------------------------------------

--
-- Table structure for table `furnishingstatus`
--

CREATE TABLE `furnishingstatus` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `furnishingstatus`
--

INSERT INTO `furnishingstatus` (`id`, `title`, `created_at`, `updated_at`) VALUES
(1, 'Furnished', '2026-10-30 10:14:07', '2026-10-30 10:14:07'),
(2, 'Unfurnished', '2026-10-30 10:14:07', '2026-10-30 10:14:07'),
(3, 'Semifurnished', '2026-10-30 10:14:07', '2026-10-30 10:14:07'),
(4, 'test-1', '2026-11-02 11:46:42', '2026-11-02 11:46:42');

-- --------------------------------------------------------

--
-- Table structure for table `getintouch`
--

CREATE TABLE `getintouch` (
  `id` int(11) NOT NULL,
  `contactus_id` int(200) NOT NULL,
  `city` varchar(255) NOT NULL,
  `address` text DEFAULT NULL,
  `contact` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT '1' COMMENT '1 = active, 0 = inactive',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `getintouch`
--

INSERT INTO `getintouch` (`id`, `contactus_id`, `city`, `address`, `contact`, `email`, `image`, `status`, `created_at`, `updated_at`) VALUES
(3, 3, 'Kolkata', 'Park Street', '9876543210', 'kolkata@gmail.com', '1793704332948.jpg', '1', '2026-11-03 11:12:12', '2026-11-03 11:12:12'),
(4, 3, 'Mumbai', 'Andheri', '9876543211', 'mumbai@gmail.com', '1793704332948.jpg', '1', '2026-11-03 11:12:12', '2026-11-03 11:12:12'),
(5, 3, 'Delhi', 'Connaught Place', '987644444', 'delhi@gmail.com', '1793704332954.jpg', '1', '2026-11-03 11:12:12', '2026-11-03 11:12:12');

-- --------------------------------------------------------

--
-- Table structure for table `home_clients`
--

CREATE TABLE `home_clients` (
  `id` int(11) NOT NULL,
  `image_url` varchar(500) NOT NULL,
  `heading` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `is_active` tinyint(1) DEFAULT 1,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `home_clients`
--

INSERT INTO `home_clients` (`id`, `image_url`, `heading`, `description`, `is_active`, `created_at`, `updated_at`) VALUES
(1, '/uploads/home-1793695988777-337771099.jpg', 'Ajay Begraj Group', 'A leading real estate developer in Siliguri, known for crafting distinguished residences & commercial landmarks across Eastern India.', 1, '2026-11-03 08:53:08', '2026-11-03 08:53:08'),
(2, '/uploads/home-1793695988787-828678661.jpg', 'Ambuja Neotia Group', 'A diversified business group with a strong presence across real estate, hospitality, healthcare, and education.', 1, '2026-11-03 08:53:08', '2026-11-03 08:53:08'),
(3, '/uploads/home-1793695988792-264737935.jpg', 'Bhawani Group', 'From blueprint to reality, Bhawani Group creates spaces that go beyond structures to shape experiences that endure.', 1, '2026-11-03 08:53:08', '2026-11-03 08:53:08'),
(4, '/uploads/home-1793695988796-406254291.jpg', 'DTC Group', 'From its roots in mining four decades ago, DTC Group has evolved into a diversified enterprise with a growing presence across real estate and infrastructure.', 1, '2026-11-03 08:53:08', '2026-11-03 08:53:08'),
(5, '/uploads/home-1793695988800-769565693.jpg', 'Emami Realty', 'Built on quality, transparency, customer focus, and a commitment to delivery, Emami Realty strives to create lasting value and trusted relationships.', 1, '2026-11-03 08:53:08', '2026-11-03 08:53:08');

-- --------------------------------------------------------

--
-- Table structure for table `home_faqs`
--

CREATE TABLE `home_faqs` (
  `id` int(11) NOT NULL,
  `question` text NOT NULL,
  `answer` text NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `masterplan`
--

CREATE TABLE `masterplan` (
  `id` int(11) NOT NULL,
  `popertydetails_id` int(11) DEFAULT NULL,
  `master_image` varchar(255) DEFAULT NULL,
  `master_position` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `masterplan`
--

INSERT INTO `masterplan` (`id`, `popertydetails_id`, `master_image`, `master_position`, `created_at`, `updated_at`) VALUES
(7, 3, '1793355284194-Screenshot_2026-10-14-13-40-59-77_9cadf0c1485d43345523d40eca370a2e.jpg', 1, '2026-10-30 10:14:44', '2026-10-30 10:14:44'),
(8, 3, '1793355284201-Screenshot_2026-10-14-13-40-41-87_9cadf0c1485d43345523d40eca370a2e.jpg', 2, '2026-10-30 10:14:44', '2026-10-30 10:14:44'),
(9, 3, '1793355284208-Screenshot_2026-10-14-13-40-47-81_9cadf0c1485d43345523d40eca370a2e.jpg', 3, '2026-10-30 10:14:44', '2026-10-30 10:14:44'),
(10, 4, '1793439823162-Screenshot_2026-10-14-13-40-59-77_9cadf0c1485d43345523d40eca370a2e.jpg', 1, '2026-10-31 09:43:43', '2026-10-31 09:43:43'),
(11, 4, '1793439823167-Screenshot_2026-10-14-13-40-41-87_9cadf0c1485d43345523d40eca370a2e.jpg', 2, '2026-10-31 09:43:43', '2026-10-31 09:43:43'),
(12, 4, '1793439823170-Screenshot_2026-10-14-13-40-47-81_9cadf0c1485d43345523d40eca370a2e.jpg', 3, '2026-10-31 09:43:43', '2026-10-31 09:43:43'),
(13, 5, '1793446816234-Screenshot_2026-10-14-13-40-59-77_9cadf0c1485d43345523d40eca370a2e.jpg', 1, '2026-10-31 11:40:16', '2026-10-31 11:40:16'),
(14, 5, '1793446816238-Screenshot_2026-10-14-13-40-41-87_9cadf0c1485d43345523d40eca370a2e.jpg', 2, '2026-10-31 11:40:16', '2026-10-31 11:40:16'),
(15, 5, '1793446816241-Screenshot_2026-10-14-13-40-47-81_9cadf0c1485d43345523d40eca370a2e.jpg', 3, '2026-10-31 11:40:16', '2026-10-31 11:40:16');

-- --------------------------------------------------------

--
-- Table structure for table `noofbedrooms`
--

CREATE TABLE `noofbedrooms` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `noofbedrooms`
--

INSERT INTO `noofbedrooms` (`id`, `title`, `created_at`, `updated_at`) VALUES
(1, '1 RK/1 BHK', '2026-10-30 10:13:34', '2026-10-30 10:13:34'),
(2, '2 BHK', '2026-10-30 10:13:34', '2026-10-30 10:13:34'),
(3, '3 BHK', '2026-10-30 10:13:34', '2026-10-30 10:13:34'),
(4, 'test-1', '2026-11-02 11:50:18', '2026-11-02 11:50:18');

-- --------------------------------------------------------

--
-- Table structure for table `popertybhk`
--

CREATE TABLE `popertybhk` (
  `id` int(11) NOT NULL,
  `popertydetails_id` int(11) DEFAULT NULL,
  `bhk_title` varchar(255) DEFAULT NULL,
  `bhk_price` varchar(255) DEFAULT NULL,
  `bhk_size` varchar(255) DEFAULT NULL,
  `bhk_position` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `popertybhk`
--

INSERT INTO `popertybhk` (`id`, `popertydetails_id`, `bhk_title`, `bhk_price`, `bhk_size`, `bhk_position`, `created_at`, `updated_at`) VALUES
(7, 3, '3BHK(2T)', '1.2 Cr', '1278-1428 sq ft', 1, '2026-10-30 10:14:44', '2026-10-30 10:14:44'),
(8, 3, '3BHK(2T)', '1.3 Cr', '1278-1428 sq ft', 2, '2026-10-30 10:14:44', '2026-10-30 10:14:44'),
(9, 3, '3BHK(2T)', '1.4 Cr', '1278-1428 sq ft', 3, '2026-10-30 10:14:44', '2026-10-30 10:14:44'),
(10, 4, '3BHK(2T)', '1.2 Cr', '1278-1428 sq ft', 1, '2026-10-31 09:43:43', '2026-10-31 09:43:43'),
(11, 4, '3BHK(2T)', '1.3 Cr', '1278-1428 sq ft', 2, '2026-10-31 09:43:43', '2026-10-31 09:43:43'),
(12, 4, '3BHK(2T)', '1.4 Cr', '1278-1428 sq ft', 3, '2026-10-31 09:43:43', '2026-10-31 09:43:43'),
(13, 5, '3BHK(2T)', '1.2 Cr', '1278-1428 sq ft', 1, '2026-10-31 11:40:16', '2026-10-31 11:40:16'),
(14, 5, '3BHK(2T)', '1.3 Cr', '1278-1428 sq ft', 2, '2026-10-31 11:40:16', '2026-10-31 11:40:16'),
(15, 5, '3BHK(2T)', '1.4 Cr', '1278-1428 sq ft', 3, '2026-10-31 11:40:16', '2026-10-31 11:40:16');

-- --------------------------------------------------------

--
-- Table structure for table `popertydetails`
--

CREATE TABLE `popertydetails` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `author` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `general_info_date` varchar(255) DEFAULT NULL,
  `seleable_area` varchar(255) DEFAULT NULL,
  `bhk` varchar(255) DEFAULT NULL,
  `land_area` varchar(255) DEFAULT NULL,
  `total_flats` varchar(255) DEFAULT NULL,
  `towers` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `project_rera` varchar(255) DEFAULT NULL,
  `verified` varchar(255) DEFAULT '1' COMMENT '1=verified,0=not verified',
  `status` varchar(255) DEFAULT '1' COMMENT '1=active,0=inactive',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `popertydetails`
--

INSERT INTO `popertydetails` (`id`, `title`, `author`, `location`, `address`, `price`, `general_info_date`, `seleable_area`, `bhk`, `land_area`, `total_flats`, `towers`, `description`, `project_rera`, `verified`, `status`, `created_at`, `updated_at`) VALUES
(3, 'PURTI TATSAM', 'Purti Reality', 'kolkata(Rajarhat)', 'On SIx Lane-Rajarhat Newtown', '1.12 cr', 'Dec 2030', '1,278 - 1788 sq ft Saleable Area', '3,4BHK', '100 Katha', '189 Flats', '6 Towers', 'chvouoiheqiuwifubdfihoiasdhiaboiugoihihiq', 'WBRERA/P/NOR/2025/003198', '1', '1', '2026-10-30 10:14:44', '2026-10-30 12:01:21'),
(4, 'PURTI TATSAM', 'Purti Reality', 'kolkata(Rajarhat)', 'On SIx Lane-Rajarhat Newtown', '1.12 cr', 'Dec 2030', '1,278 - 1788 sq ft Saleable Area', '3,4BHK', '100 Katha', '189 Flats', '3 Towers', 'chvouoiheqiuwifubdfihoiasdhiaboiugoihihiq', NULL, '1', '1', '2026-10-31 09:43:43', '2026-10-31 09:43:43'),
(5, 'PURTI TATSAM', 'Purti Reality', 'kolkata(Rajarhat)', 'On SIx Lane-Rajarhat Newtown', '1.12 cr', 'Dec 2030', '1,278 - 1788 sq ft Saleable Area', '3,4BHK', '100 Katha', '189 Flats', '3 Towers', 'chvouoiheqiuwifubdfihoiasdhiaboiugoihihiq', 'WBRERA/P/NOR/2025/003198', '1', '1', '2026-10-31 11:40:16', '2026-10-31 11:40:16'),
(6, 'TEST', '', '', '', '', '', '', '', '', '', '', '', '', '1', '1', '2026-11-02 11:58:44', '2026-11-02 11:58:44');

-- --------------------------------------------------------

--
-- Table structure for table `popertydetails_amenities`
--

CREATE TABLE `popertydetails_amenities` (
  `id` int(11) NOT NULL,
  `popertydetails_id` int(11) DEFAULT NULL,
  `amenities_id` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `popertydetails_amenities`
--

INSERT INTO `popertydetails_amenities` (`id`, `popertydetails_id`, `amenities_id`, `created_at`, `updated_at`) VALUES
(3, 4, 1, '2026-10-31 09:43:43', '2026-10-31 09:43:43'),
(4, 4, 2, '2026-10-31 09:43:43', '2026-10-31 09:43:43'),
(5, 5, 1, '2026-10-31 11:40:16', '2026-10-31 11:40:16'),
(6, 5, 2, '2026-10-31 11:40:16', '2026-10-31 11:40:16');

-- --------------------------------------------------------

--
-- Table structure for table `popertydetails_construction_status`
--

CREATE TABLE `popertydetails_construction_status` (
  `id` int(11) NOT NULL,
  `popertydetails_id` int(11) DEFAULT NULL,
  `construction_status_id` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `popertydetails_construction_status`
--

INSERT INTO `popertydetails_construction_status` (`id`, `popertydetails_id`, `construction_status_id`, `created_at`, `updated_at`) VALUES
(3, 4, 1, '2026-10-31 09:43:43', '2026-10-31 09:43:43'),
(4, 4, 2, '2026-10-31 09:43:43', '2026-10-31 09:43:43'),
(5, 5, 1, '2026-10-31 11:40:16', '2026-10-31 11:40:16'),
(6, 5, 2, '2026-10-31 11:40:16', '2026-10-31 11:40:16');

-- --------------------------------------------------------

--
-- Table structure for table `popertydetails_furnishingstatus`
--

CREATE TABLE `popertydetails_furnishingstatus` (
  `id` int(11) NOT NULL,
  `popertydetails_id` int(11) DEFAULT NULL,
  `furnishingstatus_id` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `popertydetails_furnishingstatus`
--

INSERT INTO `popertydetails_furnishingstatus` (`id`, `popertydetails_id`, `furnishingstatus_id`, `created_at`, `updated_at`) VALUES
(2, 4, 1, '2026-10-31 09:43:43', '2026-10-31 09:43:43'),
(3, 5, 1, '2026-10-31 11:40:16', '2026-10-31 11:40:16');

-- --------------------------------------------------------

--
-- Table structure for table `popertydetails_noofbedrooms`
--

CREATE TABLE `popertydetails_noofbedrooms` (
  `id` int(11) NOT NULL,
  `popertydetails_id` int(11) DEFAULT NULL,
  `noofbedrooms_id` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `popertydetails_noofbedrooms`
--

INSERT INTO `popertydetails_noofbedrooms` (`id`, `popertydetails_id`, `noofbedrooms_id`, `created_at`, `updated_at`) VALUES
(4, 4, 1, '2026-10-31 09:43:43', '2026-10-31 09:43:43'),
(5, 4, 2, '2026-10-31 09:43:43', '2026-10-31 09:43:43'),
(6, 5, 1, '2026-10-31 11:40:16', '2026-10-31 11:40:16'),
(7, 5, 2, '2026-10-31 11:40:16', '2026-10-31 11:40:16');

-- --------------------------------------------------------

--
-- Table structure for table `popertydetails_possessionstatus`
--

CREATE TABLE `popertydetails_possessionstatus` (
  `id` int(11) NOT NULL,
  `popertydetails_id` int(11) DEFAULT NULL,
  `possessionstatus_id` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `popertydetails_possessionstatus`
--

INSERT INTO `popertydetails_possessionstatus` (`id`, `popertydetails_id`, `possessionstatus_id`, `created_at`, `updated_at`) VALUES
(3, 4, 1, '2026-10-31 09:43:43', '2026-10-31 09:43:43'),
(4, 4, 2, '2026-10-31 09:43:43', '2026-10-31 09:43:43'),
(5, 5, 1, '2026-10-31 11:40:16', '2026-10-31 11:40:16'),
(6, 5, 2, '2026-10-31 11:40:16', '2026-10-31 11:40:16');

-- --------------------------------------------------------

--
-- Table structure for table `popertydetails_purchasetype`
--

CREATE TABLE `popertydetails_purchasetype` (
  `id` int(11) NOT NULL,
  `popertydetails_id` int(11) DEFAULT NULL,
  `purchasetype_id` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `popertydetails_purchasetype`
--

INSERT INTO `popertydetails_purchasetype` (`id`, `popertydetails_id`, `purchasetype_id`, `created_at`, `updated_at`) VALUES
(2, 4, 1, '2026-10-31 09:43:43', '2026-10-31 09:43:43'),
(3, 5, 1, '2026-10-31 11:40:16', '2026-10-31 11:40:16');

-- --------------------------------------------------------

--
-- Table structure for table `popertydetails_reraapproved`
--

CREATE TABLE `popertydetails_reraapproved` (
  `id` int(11) NOT NULL,
  `popertydetails_id` int(11) DEFAULT NULL,
  `reraapproved_id` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `popertydetails_reraapproved`
--

INSERT INTO `popertydetails_reraapproved` (`id`, `popertydetails_id`, `reraapproved_id`, `created_at`, `updated_at`) VALUES
(2, 4, 1, '2026-10-31 09:43:43', '2026-10-31 09:43:43'),
(3, 5, 1, '2026-10-31 11:40:16', '2026-10-31 11:40:16');

-- --------------------------------------------------------

--
-- Table structure for table `popertydetails_typeofpoperty`
--

CREATE TABLE `popertydetails_typeofpoperty` (
  `id` int(11) NOT NULL,
  `popertydetails_id` int(11) DEFAULT NULL,
  `typeofpoperty_id` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `popertydetails_typeofpoperty`
--

INSERT INTO `popertydetails_typeofpoperty` (`id`, `popertydetails_id`, `typeofpoperty_id`, `created_at`, `updated_at`) VALUES
(11, 4, 1, '2026-10-31 09:43:43', '2026-10-31 09:43:43'),
(12, 4, 2, '2026-10-31 09:43:43', '2026-10-31 09:43:43'),
(13, 5, 1, '2026-10-31 11:40:16', '2026-10-31 11:40:16'),
(14, 5, 2, '2026-10-31 11:40:16', '2026-10-31 11:40:16');

-- --------------------------------------------------------

--
-- Table structure for table `popertyimage`
--

CREATE TABLE `popertyimage` (
  `id` int(11) NOT NULL,
  `popertydetails_id` int(11) DEFAULT NULL,
  `poperty_image` varchar(255) DEFAULT NULL,
  `poperty_position` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `popertyimage`
--

INSERT INTO `popertyimage` (`id`, `popertydetails_id`, `poperty_image`, `poperty_position`, `created_at`, `updated_at`) VALUES
(9, 3, '1793355284174-Screenshot_2026-10-14-13-46-16-71_9cadf0c1485d43345523d40eca370a2e.jpg', 1234, '2026-10-30 10:14:44', '2026-10-30 10:14:44'),
(10, 3, '1793355284179-Screenshot_2026-10-14-13-40-44-85_9cadf0c1485d43345523d40eca370a2e.jpg', 2, '2026-10-30 10:14:44', '2026-10-30 10:14:44'),
(11, 3, '1793355284183-Screenshot_2026-10-14-13-40-59-77_9cadf0c1485d43345523d40eca370a2e.jpg', 3, '2026-10-30 10:14:44', '2026-10-30 10:14:44'),
(12, 3, '1793355284188-Screenshot_2026-10-14-13-40-41-87_9cadf0c1485d43345523d40eca370a2e.jpg', 4, '2026-10-30 10:14:44', '2026-10-30 10:14:44'),
(13, 4, '1793439823144-Screenshot_2026-10-14-13-46-16-71_9cadf0c1485d43345523d40eca370a2e.jpg', 1234, '2026-10-31 09:43:43', '2026-10-31 09:43:43'),
(14, 4, '1793439823149-Screenshot_2026-10-14-13-40-44-85_9cadf0c1485d43345523d40eca370a2e.jpg', 2, '2026-10-31 09:43:43', '2026-10-31 09:43:43'),
(15, 4, '1793439823152-Screenshot_2026-10-14-13-40-59-77_9cadf0c1485d43345523d40eca370a2e.jpg', 3, '2026-10-31 09:43:43', '2026-10-31 09:43:43'),
(16, 4, '1793439823155-Screenshot_2026-10-14-13-40-41-87_9cadf0c1485d43345523d40eca370a2e.jpg', 4, '2026-10-31 09:43:43', '2026-10-31 09:43:43'),
(17, 5, '1793446816213-Screenshot_2026-10-14-13-46-16-71_9cadf0c1485d43345523d40eca370a2e.jpg', 1234, '2026-10-31 11:40:16', '2026-10-31 11:40:16'),
(18, 5, '1793446816218-Screenshot_2026-10-14-13-40-44-85_9cadf0c1485d43345523d40eca370a2e.jpg', 2, '2026-10-31 11:40:16', '2026-10-31 11:40:16'),
(19, 5, '1793446816222-Screenshot_2026-10-14-13-40-59-77_9cadf0c1485d43345523d40eca370a2e.jpg', 3, '2026-10-31 11:40:16', '2026-10-31 11:40:16'),
(20, 5, '1793446816226-Screenshot_2026-10-14-13-40-41-87_9cadf0c1485d43345523d40eca370a2e.jpg', 4, '2026-10-31 11:40:16', '2026-10-31 11:40:16');

-- --------------------------------------------------------

--
-- Table structure for table `possessionstatus`
--

CREATE TABLE `possessionstatus` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `possessionstatus`
--

INSERT INTO `possessionstatus` (`id`, `title`, `created_at`, `updated_at`) VALUES
(1, 'Ready To Move', '2026-10-30 10:13:48', '2026-10-30 10:13:48'),
(2, 'Under Construction', '2026-10-30 10:13:48', '2026-10-30 10:13:48'),
(3, 'test-1', '2026-11-02 11:49:54', '2026-11-02 11:49:54');

-- --------------------------------------------------------

--
-- Table structure for table `purchasetype`
--

CREATE TABLE `purchasetype` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `purchasetype`
--

INSERT INTO `purchasetype` (`id`, `title`, `created_at`, `updated_at`) VALUES
(1, 'Resale', '2026-10-30 10:13:54', '2026-10-30 10:13:54'),
(2, 'New Booking', '2026-10-30 10:13:54', '2026-10-30 10:13:54'),
(3, 'test-1', '2026-11-02 11:49:41', '2026-11-02 11:49:41');

-- --------------------------------------------------------

--
-- Table structure for table `reraapproved`
--

CREATE TABLE `reraapproved` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `reraapproved`
--

INSERT INTO `reraapproved` (`id`, `title`, `created_at`, `updated_at`) VALUES
(1, 'RERA approved poperties', '2026-10-30 10:14:15', '2026-10-30 10:14:15'),
(2, 'RERA registered dealers', '2026-10-30 10:14:15', '2026-10-30 10:14:15'),
(3, 'test-1', '2026-11-02 11:46:26', '2026-11-02 11:46:26');

-- --------------------------------------------------------

--
-- Table structure for table `service_main_items`
--

CREATE TABLE `service_main_items` (
  `id` int(11) NOT NULL,
  `imageUrl` varchar(255) NOT NULL,
  `heading` varchar(255) NOT NULL,
  `description` longtext NOT NULL,
  `isActive` tinyint(1) DEFAULT 1,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `service_main_items`
--

INSERT INTO `service_main_items` (`id`, `imageUrl`, `heading`, `description`, `isActive`, `createdAt`, `updatedAt`) VALUES
(1, '/uploads/services/service-1793697059514-184947975.jpg', 'OUR SERVICES', '<p>From identifying the right opportunities to understanding market potential and investment considerations, we offer guidance at every step. With a client-first approach and strong industry knowledge, our team makes the real estate journey more informed, transparent, and seamless.</p>', 1, '2026-11-03 09:10:59', '2026-11-03 09:10:59'),
(2, '/uploads/services/service-1793697059514-641086483.jpg', 'FOR BUYERS', '<p>At Mulyam, our focus is to make every step seamless, transparent, and rewarding for our buyers by doing the following:</p><ul><li>Free, end-to-end assistance for a seamless home-buying journey</li><li>Curated property search based on budget, location, and preferences</li><li>Site visit coordination with guided project walkthroughs</li><li>Expert advice backed by market insights and pricing trends</li><li>Negotiation support to secure the best deals and offers</li><li>Assistance with documentation, legal processes, and home loans</li><li>Post-sales support including coordination and possession assistance</li><li>Access to exclusive deals through strong developer relationships</li></ul><p>We act as trusted advisors, ensuring a transparent, efficient, and rewarding home-buying experience from search to possession.</p>', 1, '2026-11-03 09:10:59', '2026-11-03 09:10:59'),
(3, '/uploads/services/service-1793697059514-751500522.jpg', 'FOR INVESTORS', '<p>Our approach is focused on simplifying acquisition while maximizing long-term value and returns. We help investors by providing:</p><ul><li>Market insights and advisory to identify high-growth, investment-worthy opportunities</li><li>Property selection with curated options and site visit coordination</li><li>Expert evaluation of layouts, amenities, and return potential</li><li>Negotiation support to secure optimal pricing and flexible terms</li><li>Due diligence including legal checks, RERA compliance, and risk assessment</li><li>Financial guidance covering loan processes, payment structures, and ROI planning</li><li>End-to-end support through documentation, closing, and post-purchase coordination</li></ul><p>We act as trusted investment advisors, ensuring a transparent, efficient, and value-driven investment experience.</p>', 1, '2026-11-03 09:10:59', '2026-11-03 09:10:59'),
(4, '/uploads/services/service-1793697059515-457637795.jpg', 'FOR DEVELOPERS', '<p>At Mulyam, we act as an extended sales and marketing partner, enabling developers to accelerate sales and expand market reach. We help developers in the following ways:</p><ul><li>Strategic marketing and promotion through targeted campaigns and qualified lead generation</li><li>Sales acceleration with end-to-end management, from inquiries to site visits and deal closure</li><li>Market intelligence and feedback on buyer preferences and emerging trends</li><li>CRM-driven management of the entire buyer journey, from lead to booking and documentation</li><li>Expanded reach across wider audiences, including NRIs and institutional investors</li><li>Inventory support and underwriting to enhance liquidity when required</li></ul><p>We operate as specialized sales teams, driving faster closures and improving overall sales efficiency.</p>', 1, '2026-11-03 09:10:59', '2026-11-03 09:10:59');

-- --------------------------------------------------------

--
-- Table structure for table `service_secondary_items`
--

CREATE TABLE `service_secondary_items` (
  `id` int(11) NOT NULL,
  `heading` varchar(255) NOT NULL,
  `subHeading` varchar(255) DEFAULT NULL,
  `description` longtext NOT NULL,
  `isActive` tinyint(1) DEFAULT 1,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `service_secondary_items`
--

INSERT INTO `service_secondary_items` (`id`, `heading`, `subHeading`, `description`, `isActive`, `createdAt`, `updatedAt`) VALUES
(1, 'Open Market Sales', 'Connecting Buyers with Premium Properties', '<ul><li>Facilitating residential sales for leading Grade A+ developers across the city</li><li>Generating qualified leads through targeted digital marketing initiatives</li><li>Conducting client presentations, property walkthroughs, and guided site visits</li><li>Providing complete advisory and assistance throughout the purchase journey</li><li>Keeping clients informed about new launches and market opportunities</li><li>Managing resale opportunities and market insights while building long-term client relationships</li></ul>', 1, '2026-11-03 09:11:18', '2026-11-03 09:11:18'),
(2, 'Mandate Sales', 'End-to-End Project Sales Management', '<ul><li>Market research, pricing strategy, and project planning advisory</li><li>Development and execution of integrated marketing and digital campaigns</li><li>Vendor identification, marketing collateral development, and event coordination</li><li>Deployment of dedicated pre-sales and sales teams to manage enquiries and conversions</li><li>Keeping clients informed about new launches and market opportunities</li><li>Channel partner management and sales tracking systems for transparency and efficiency</li><li>Post-sales CRM, documentation, bank tie-ups, collections, registrations, and handover coordination</li></ul>', 1, '2026-11-03 09:11:18', '2026-11-03 09:11:18'),
(3, 'Strategic Partnership', 'Driving Long-Term Project Growth', '<ul><li>Market intelligence, pricing strategy, and project design advisory</li><li>Implementation of integrated marketing strategies and digital demand generation</li><li>Vendor management, branding, and project collateral development of pre-sales teams and experienced sales professionals</li><li>Channel partner engagement and sales ecosystem management</li><li>Sales tracking systems and event activations to sustain market visibility and momentum</li></ul>', 1, '2026-11-03 09:11:18', '2026-11-03 09:11:18');

-- --------------------------------------------------------

--
-- Table structure for table `typeofpopertys`
--

CREATE TABLE `typeofpopertys` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `typeofpopertys`
--

INSERT INTO `typeofpopertys` (`id`, `title`, `created_at`, `updated_at`) VALUES
(1, 'Apartment', '2026-10-30 10:13:28', '2026-10-30 10:13:28'),
(2, 'Villa', '2026-10-30 10:13:28', '2026-10-30 10:13:28'),
(3, 'Commercial', '2026-10-30 10:13:28', '2026-10-30 10:13:28'),
(4, 'test-1', '2026-11-02 11:50:30', '2026-11-02 11:50:30');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `aboutus`
--
ALTER TABLE `aboutus`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `about_mission_vision`
--
ALTER TABLE `about_mission_vision`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `about_our_ventures`
--
ALTER TABLE `about_our_ventures`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `about_teams`
--
ALTER TABLE `about_teams`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `about_team_intros`
--
ALTER TABLE `about_team_intros`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `amenities`
--
ALTER TABLE `amenities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `blogs`
--
ALTER TABLE `blogs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `brochure`
--
ALTER TABLE `brochure`
  ADD PRIMARY KEY (`id`),
  ADD KEY `popertydetails_id` (`popertydetails_id`);

--
-- Indexes for table `constructionstatus`
--
ALTER TABLE `constructionstatus`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contactus`
--
ALTER TABLE `contactus`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `floorplan`
--
ALTER TABLE `floorplan`
  ADD PRIMARY KEY (`id`),
  ADD KEY `popertydetails_id` (`popertydetails_id`);

--
-- Indexes for table `furnishingstatus`
--
ALTER TABLE `furnishingstatus`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `getintouch`
--
ALTER TABLE `getintouch`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `home_clients`
--
ALTER TABLE `home_clients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `home_faqs`
--
ALTER TABLE `home_faqs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `masterplan`
--
ALTER TABLE `masterplan`
  ADD PRIMARY KEY (`id`),
  ADD KEY `popertydetails_id` (`popertydetails_id`);

--
-- Indexes for table `noofbedrooms`
--
ALTER TABLE `noofbedrooms`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `popertybhk`
--
ALTER TABLE `popertybhk`
  ADD PRIMARY KEY (`id`),
  ADD KEY `popertydetails_id` (`popertydetails_id`);

--
-- Indexes for table `popertydetails`
--
ALTER TABLE `popertydetails`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `popertydetails_amenities`
--
ALTER TABLE `popertydetails_amenities`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `uq_property_amenities` (`popertydetails_id`,`amenities_id`),
  ADD KEY `amenities_id` (`amenities_id`);

--
-- Indexes for table `popertydetails_construction_status`
--
ALTER TABLE `popertydetails_construction_status`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `uq_property_construction` (`popertydetails_id`,`construction_status_id`),
  ADD KEY `construction_status_id` (`construction_status_id`);

--
-- Indexes for table `popertydetails_furnishingstatus`
--
ALTER TABLE `popertydetails_furnishingstatus`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `uq_property_furnishing` (`popertydetails_id`,`furnishingstatus_id`),
  ADD KEY `furnishingstatus_id` (`furnishingstatus_id`);

--
-- Indexes for table `popertydetails_noofbedrooms`
--
ALTER TABLE `popertydetails_noofbedrooms`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `uq_property_bedroom` (`popertydetails_id`,`noofbedrooms_id`),
  ADD KEY `noofbedrooms_id` (`noofbedrooms_id`);

--
-- Indexes for table `popertydetails_possessionstatus`
--
ALTER TABLE `popertydetails_possessionstatus`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `uq_property_possession` (`popertydetails_id`,`possessionstatus_id`),
  ADD KEY `possessionstatus_id` (`possessionstatus_id`);

--
-- Indexes for table `popertydetails_purchasetype`
--
ALTER TABLE `popertydetails_purchasetype`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `uq_property_purchase` (`popertydetails_id`,`purchasetype_id`),
  ADD KEY `purchasetype_id` (`purchasetype_id`);

--
-- Indexes for table `popertydetails_reraapproved`
--
ALTER TABLE `popertydetails_reraapproved`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `uq_property_rera` (`popertydetails_id`,`reraapproved_id`),
  ADD KEY `reraapproved_id` (`reraapproved_id`);

--
-- Indexes for table `popertydetails_typeofpoperty`
--
ALTER TABLE `popertydetails_typeofpoperty`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `uq_property_type` (`popertydetails_id`,`typeofpoperty_id`),
  ADD KEY `typeofpoperty_id` (`typeofpoperty_id`);

--
-- Indexes for table `popertyimage`
--
ALTER TABLE `popertyimage`
  ADD PRIMARY KEY (`id`),
  ADD KEY `popertydetails_id` (`popertydetails_id`);

--
-- Indexes for table `possessionstatus`
--
ALTER TABLE `possessionstatus`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `purchasetype`
--
ALTER TABLE `purchasetype`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reraapproved`
--
ALTER TABLE `reraapproved`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `service_main_items`
--
ALTER TABLE `service_main_items`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `service_secondary_items`
--
ALTER TABLE `service_secondary_items`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `typeofpopertys`
--
ALTER TABLE `typeofpopertys`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `aboutus`
--
ALTER TABLE `aboutus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `about_mission_vision`
--
ALTER TABLE `about_mission_vision`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `about_our_ventures`
--
ALTER TABLE `about_our_ventures`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `about_teams`
--
ALTER TABLE `about_teams`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `about_team_intros`
--
ALTER TABLE `about_team_intros`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `amenities`
--
ALTER TABLE `amenities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `blogs`
--
ALTER TABLE `blogs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `brochure`
--
ALTER TABLE `brochure`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `constructionstatus`
--
ALTER TABLE `constructionstatus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `contactus`
--
ALTER TABLE `contactus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `floorplan`
--
ALTER TABLE `floorplan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `furnishingstatus`
--
ALTER TABLE `furnishingstatus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `getintouch`
--
ALTER TABLE `getintouch`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `home_clients`
--
ALTER TABLE `home_clients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `home_faqs`
--
ALTER TABLE `home_faqs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `masterplan`
--
ALTER TABLE `masterplan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `noofbedrooms`
--
ALTER TABLE `noofbedrooms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `popertybhk`
--
ALTER TABLE `popertybhk`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `popertydetails`
--
ALTER TABLE `popertydetails`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `popertydetails_amenities`
--
ALTER TABLE `popertydetails_amenities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `popertydetails_construction_status`
--
ALTER TABLE `popertydetails_construction_status`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `popertydetails_furnishingstatus`
--
ALTER TABLE `popertydetails_furnishingstatus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `popertydetails_noofbedrooms`
--
ALTER TABLE `popertydetails_noofbedrooms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `popertydetails_possessionstatus`
--
ALTER TABLE `popertydetails_possessionstatus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `popertydetails_purchasetype`
--
ALTER TABLE `popertydetails_purchasetype`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `popertydetails_reraapproved`
--
ALTER TABLE `popertydetails_reraapproved`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `popertydetails_typeofpoperty`
--
ALTER TABLE `popertydetails_typeofpoperty`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `popertyimage`
--
ALTER TABLE `popertyimage`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `possessionstatus`
--
ALTER TABLE `possessionstatus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `purchasetype`
--
ALTER TABLE `purchasetype`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `reraapproved`
--
ALTER TABLE `reraapproved`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `service_main_items`
--
ALTER TABLE `service_main_items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `service_secondary_items`
--
ALTER TABLE `service_secondary_items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `typeofpopertys`
--
ALTER TABLE `typeofpopertys`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `brochure`
--
ALTER TABLE `brochure`
  ADD CONSTRAINT `brochure_ibfk_1` FOREIGN KEY (`popertydetails_id`) REFERENCES `popertydetails` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `floorplan`
--
ALTER TABLE `floorplan`
  ADD CONSTRAINT `floorplan_ibfk_1` FOREIGN KEY (`popertydetails_id`) REFERENCES `popertydetails` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `masterplan`
--
ALTER TABLE `masterplan`
  ADD CONSTRAINT `masterplan_ibfk_1` FOREIGN KEY (`popertydetails_id`) REFERENCES `popertydetails` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `popertybhk`
--
ALTER TABLE `popertybhk`
  ADD CONSTRAINT `popertybhk_ibfk_1` FOREIGN KEY (`popertydetails_id`) REFERENCES `popertydetails` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `popertydetails_amenities`
--
ALTER TABLE `popertydetails_amenities`
  ADD CONSTRAINT `popertydetails_amenities_ibfk_1` FOREIGN KEY (`popertydetails_id`) REFERENCES `popertydetails` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `popertydetails_amenities_ibfk_2` FOREIGN KEY (`amenities_id`) REFERENCES `amenities` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `popertydetails_construction_status`
--
ALTER TABLE `popertydetails_construction_status`
  ADD CONSTRAINT `popertydetails_construction_status_ibfk_1` FOREIGN KEY (`popertydetails_id`) REFERENCES `popertydetails` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `popertydetails_construction_status_ibfk_2` FOREIGN KEY (`construction_status_id`) REFERENCES `constructionstatus` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `popertydetails_furnishingstatus`
--
ALTER TABLE `popertydetails_furnishingstatus`
  ADD CONSTRAINT `popertydetails_furnishingstatus_ibfk_1` FOREIGN KEY (`popertydetails_id`) REFERENCES `popertydetails` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `popertydetails_furnishingstatus_ibfk_2` FOREIGN KEY (`furnishingstatus_id`) REFERENCES `furnishingstatus` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `popertydetails_noofbedrooms`
--
ALTER TABLE `popertydetails_noofbedrooms`
  ADD CONSTRAINT `popertydetails_noofbedrooms_ibfk_1` FOREIGN KEY (`popertydetails_id`) REFERENCES `popertydetails` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `popertydetails_noofbedrooms_ibfk_2` FOREIGN KEY (`noofbedrooms_id`) REFERENCES `noofbedrooms` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `popertydetails_possessionstatus`
--
ALTER TABLE `popertydetails_possessionstatus`
  ADD CONSTRAINT `popertydetails_possessionstatus_ibfk_1` FOREIGN KEY (`popertydetails_id`) REFERENCES `popertydetails` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `popertydetails_possessionstatus_ibfk_2` FOREIGN KEY (`possessionstatus_id`) REFERENCES `possessionstatus` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `popertydetails_purchasetype`
--
ALTER TABLE `popertydetails_purchasetype`
  ADD CONSTRAINT `popertydetails_purchasetype_ibfk_1` FOREIGN KEY (`popertydetails_id`) REFERENCES `popertydetails` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `popertydetails_purchasetype_ibfk_2` FOREIGN KEY (`purchasetype_id`) REFERENCES `purchasetype` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `popertydetails_reraapproved`
--
ALTER TABLE `popertydetails_reraapproved`
  ADD CONSTRAINT `popertydetails_reraapproved_ibfk_1` FOREIGN KEY (`popertydetails_id`) REFERENCES `popertydetails` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `popertydetails_reraapproved_ibfk_2` FOREIGN KEY (`reraapproved_id`) REFERENCES `reraapproved` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `popertydetails_typeofpoperty`
--
ALTER TABLE `popertydetails_typeofpoperty`
  ADD CONSTRAINT `popertydetails_typeofpoperty_ibfk_1` FOREIGN KEY (`popertydetails_id`) REFERENCES `popertydetails` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `popertydetails_typeofpoperty_ibfk_2` FOREIGN KEY (`typeofpoperty_id`) REFERENCES `typeofpopertys` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `popertyimage`
--
ALTER TABLE `popertyimage`
  ADD CONSTRAINT `popertyimage_ibfk_1` FOREIGN KEY (`popertydetails_id`) REFERENCES `popertydetails` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
