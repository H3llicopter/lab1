-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: users
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `userstable`
--

DROP TABLE IF EXISTS `userstable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `userstable` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fullname` varchar(200) DEFAULT NULL,
  `email` varchar(200) DEFAULT NULL,
  `address` varchar(200) DEFAULT NULL,
  `phone` varchar(200) DEFAULT NULL,
  `website` varchar(200) DEFAULT NULL,
  `company` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userstable`
--

LOCK TABLES `userstable` WRITE;
/*!40000 ALTER TABLE `userstable` DISABLE KEYS */;
INSERT INTO `userstable` VALUES (1,'Leanne Graham','Sincere@april.biz','Kulas Light, Apt. 556, Gwenborough, 92998-3874, -37.3159, 81.1496','1-770-736-8031 x56442','hildegard.org','Romaguera-Crona, Multi-layered client-server neural-net, harness real-time e-markets'),(2,'Ervin Howell','Shanna@melissa.tv','Victor Plains, Suite 879, Wisokyburgh, 90566-7771, -43.9509, -34.4618','010-692-6593 x09125','anastasia.net','Deckow-Crist, Proactive didactic contingency, synergize scalable supply-chains'),(3,'Clementine Bauch','Nathan@yesenia.net','Douglas Extension, Suite 847, McKenziehaven, 59590-4157, -68.6102, -47.0653','1-463-123-4447','ramiro.info','Romaguera-Jacobson, Face to face bifurcated interface, e-enable strategic applications'),(4,'Patricia Lebsack','Julianne.OConner@kory.org','Hoeger Mall, Apt. 692, South Elvis, 53919-4257, 29.4572, -164.2990','493-170-9623 x156','kale.biz','Robel-Corkery, Multi-tiered zero tolerance productivity, transition cutting-edge web services'),(5,'Chelsey Dietrich','Lucio_Hettinger@annie.ca','Skiles Walks, Suite 351, Roscoeview, 33263, -31.8129, 62.5342','(254)954-1289','demarco.info','Keebler LLC, User-centric fault-tolerant solution, revolutionize end-to-end systems'),(6,'Mrs. Dennis Schulist','Karley_Dach@jasper.info','Norberto Crossing, Apt. 950, South Christy, 23505-1337, -71.4197, 71.7478','1-477-935-8478 x6430','ola.org','Considine-Lockman, Synchronised bottom-line interface, e-enable innovative applications'),(7,'Kurtis Weissnat','Telly.Hoeger@billy.biz','Rex Trail, Suite 280, Howemouth, 58804-1099, 24.8918, 21.8984','210.067.6132','elvis.io','Johns Group, Configurable multimedia task-force, generate enterprise e-tailers'),(8,'Nicholas Runolfsdottir V','Sherwood@rosamond.me','Ellsworth Summit, Suite 729, Aliyaview, 45169, -14.3990, -120.7677','586.493.6943 x140','jacynthe.com','Abernathy Group, Implemented secondary concept, e-enable extensible e-tailers'),(9,'Glenna Reichert','Chaim_McDermott@dana.io','Dayna Park, Suite 449, Bartholomebury, 76495-3109, 24.6463, -168.8889','(775)976-6794 x41206','conrad.com','Yost and Sons, Switchable contextually-based project, aggregate real-time technologies'),(10,'Clementina DuBuque','Rey.Padberg@karina.biz','Kattie Turnpike, Suite 198, Lebsackbury, 31428-2261, -38.2386, 57.2232','024-648-3804','ambrose.net','Hoeger LLC, Centralized empowering task-force, target end-to-end models'),(19,'Ray Wright','ray.wright@gmail.com','United Kingdom, Tayside, 3365Winchester, New Road','016973 39988','cut-pro.com','NextEra Energy, CEO');
/*!40000 ALTER TABLE `userstable` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-13 14:37:53
