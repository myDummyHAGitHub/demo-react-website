-- MySQL dump 10.13  Distrib 8.0.19, for macos10.15 (x86_64)
--
-- Host: 127.0.0.1    Database: person_skills
-- ------------------------------------------------------
-- Server version	8.0.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `level`
--

DROP TABLE IF EXISTS `level`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `level` (
  `id` int NOT NULL AUTO_INCREMENT,
  `level` int NOT NULL,
  `level_type` varchar(45) NOT NULL,
  `level_desc` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`level`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `level`
--

LOCK TABLES `level` WRITE;
/*!40000 ALTER TABLE `level` DISABLE KEYS */;
INSERT INTO `level` VALUES (8,0,'No Experience','No Experience in subject area'),
(1,10,'Fundamental','Awareness / basic knowledge (minimal use)'),
(2,20,'Basic / Novice','Limited experience (require additional training / supervisory assistantce)'),
(3,30,'Intermediate','Practical with working and functional experience'),
(4,40,'Advanced','Practical with applied in-depth experinece'),
(5,50,'Expert','Reconized Authority with broad in-depth experience'),
(6,60,'Mastery','All rounded Expert'),(7,999,'NA','Not Applicable');
/*!40000 ALTER TABLE `level` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `person`
--

DROP TABLE IF EXISTS `person`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `person` (
  `person_id` int NOT NULL,
  `firstName` varchar(45) NOT NULL,
  `lastName` varchar(45) NOT NULL,
  `middleName` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`person_id`),
  UNIQUE KEY `person_id_UNIQUE` (`person_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `person`
--

LOCK TABLES `person` WRITE;
/*!40000 ALTER TABLE `person` DISABLE KEYS */;
INSERT INTO `person` VALUES (10001,'Imran','Khan','Ahmed'),(10002,'Peter','Pan',NULL);
/*!40000 ALTER TABLE `person` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personskills`
--

DROP TABLE IF EXISTS `personskills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `personskills` (
  `person_id` int NOT NULL,
  `skill_id` int NOT NULL,
  `skill_level_id` int NOT NULL,
  PRIMARY KEY (`person_id`,`skill_id`),
  KEY `myfkskill_idx` (`skill_id`),
  KEY `myfkskilllevel_idx` (`skill_level_id`),
  CONSTRAINT `myfkperson` FOREIGN KEY (`person_id`) REFERENCES `person` (`person_id`),
  CONSTRAINT `myfkskill` FOREIGN KEY (`skill_id`) REFERENCES `skills` (`skill_id`),
  CONSTRAINT `myfkskilllevel` FOREIGN KEY (`skill_level_id`) REFERENCES `level` (`level`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personskills`
--

LOCK TABLES `personskills` WRITE;
/*!40000 ALTER TABLE `personskills` DISABLE KEYS */;
INSERT INTO `personskills` VALUES (10001,7,0),
(10001,5,20),(10001,12,20),(10001,14,20),(10001,15,20),(10001,16,20),
(10001,17,20),(10001,18,20),(10001,19,20),(10001,20,20),(10001,21,20),
(10001,25,20),(10001,26,20),(10001,35,20),(10002,2,20),(10001,11,30),
(10001,13,30),(10001,22,30),(10001,27,30),(10001,28,30),(10001,32,30),
(10001,33,30),(10001,34,30),(10001,37,30),(10001,39,30),(10001,1,40),
(10001,2,40),(10001,3,40),(10001,4,40),(10001,6,40),(10001,8,40),
(10001,10,40),(10001,36,40),(10001,38,40),(10001,40,40);
/*!40000 ALTER TABLE `personskills` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `skills`
--

DROP TABLE IF EXISTS `skills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `skills` (
  `skill_id` int NOT NULL AUTO_INCREMENT,
  `skill_name` varchar(45) NOT NULL,
  PRIMARY KEY (`skill_id`),
  UNIQUE KEY `id_UNIQUE` (`skill_id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `skills`
--

LOCK TABLES `skills` WRITE;
/*!40000 ALTER TABLE `skills` DISABLE KEYS */;
INSERT INTO `skills` VALUES (1,'HTML'),
(2,'CSS'),(3,'JavaScript'),(4,'SQL'),(5,'MySQL'),(6,'MS SQL (T-SQL)'),
(7,'MongoDB'),(8,'Java (Core)'),(9,'Java (J2EE)'),(10,'Java (J2EE) JSP/Servlet'),
(11,'ASP.NET framework'),(12,'ASP.NET Core'),(13,'C#'),(14,'git/GitHub'),
(15,'ReactJS'),(16,'node.js'),(17,'ASP.NET MVC'),(18,'ASP.NET Web API'),
(19,'RedHat OpenShift PaaS Private Cloud'),(20,'Docker'),(21,'Kubernetes'),
(22,'Unix Based OS'),(23,'Linux Based OS'),(24,'JIRA'),(25,'Swift'),(
  26,'Xcode'),(27,'Unix based BASH Shell commands'),(28,'Excel'),
(29,'Java SpringBoot'),(30,'Java Spring Framework'),(31,'Java Hibernate ORM'),
(32,'Visual Studio IDE'),(33,'Visual Studio Code IDE'),(34,'IBM Websphere Application Server'),
(35,'MS IIS Server'),(36,'MS SQL Sever (SSMS)'),(37,'MySQL Workbench'),
(38,'Boralnd JBuilder IDE'),(39,'Eclipse IDE'),(40,'Java (J2EE) JSP Tag Library');
/*!40000 ALTER TABLE `skills` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `vpersonskills`
--

DROP TABLE IF EXISTS `vpersonskills`;
/*!50001 DROP VIEW IF EXISTS `vpersonskills`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `vpersonskills` AS SELECT 
 1 AS `skill_name`,
 1 AS `level_type`,
 1 AS `level_desc`*/;
SET character_set_client = @saved_cs_client;

--
-- Final view structure for view `vpersonskills`
--

/*!50001 DROP VIEW IF EXISTS `vpersonskills`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `vpersonskills` AS select `s`.`skill_name` AS `skill_name`,`l`.`level_type` AS `level_type`,`l`.`level_desc` AS `level_desc` from (((`person` `p` join `personskills` `ps` on((`ps`.`person_id` = `p`.`person_id`))) join `skills` `s` on((`s`.`skill_id` = `ps`.`skill_id`))) join `level` `l` on((`l`.`level` = `ps`.`skill_level_id`))) where (`p`.`person_id` = 10001) order by `p`.`firstName`,`l`.`level` desc,`s`.`skill_name` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-10-14 21:29:39





-- Final Query 
-- SELECT skill_name, level_type FROM person_skills.vPersonSkills;