/*
 Navicat Premium Data Transfer

 Source Server         : test
 Source Server Type    : MySQL
 Source Server Version : 50724
 Source Host           : localhost:3306
 Source Schema         : test

 Target Server Type    : MySQL
 Target Server Version : 50724
 File Encoding         : 65001

 Date: 25/09/2019 19:48:42
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for dealer
-- ----------------------------
DROP TABLE IF EXISTS `dealer`;
CREATE TABLE `dealer`  (
  `d_id` char(8) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `d_name` char(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `pr_ad` char(40) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `d_pname` char(6) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `d_ptel` char(11) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`d_id`) USING BTREE,
  INDEX `pr_ad`(`pr_ad`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of dealer
-- ----------------------------
INSERT INTO `dealer` VALUES ('ALQLDE22', '天津全联数码', '天津', '刘嘉嘉', '11111111111');
INSERT INTO `dealer` VALUES ('ASGHDE11', '\r\n华硕共好专卖店', '四川成都', '刘昊然', '15184775369');
INSERT INTO `dealer` VALUES ('ASJDDE11', '\r\n京东世纪贸易有限公司', '北京', '王吴磊', '18198324586');
INSERT INTO `dealer` VALUES ('ASSNDE22', '苏宁易购电子商务有限公司', '江苏', '王吴', '18198324586');
INSERT INTO `dealer` VALUES ('DEXCDE11', '鑫创科技', '浙江', '何瑞', '17196364386');
INSERT INTO `dealer` VALUES ('LELSDE22', '成都凌尚科技', '四川成都', '马天宇', '18180045263');
INSERT INTO `dealer` VALUES ('LEZXDE22', '上海众寻科技', '上海', '马温蒂', '13526548953');

-- ----------------------------
-- Table structure for login
-- ----------------------------
DROP TABLE IF EXISTS `login`;
CREATE TABLE `login`  (
  `user` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `pwd` varchar(15) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`user`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of login
-- ----------------------------
INSERT INTO `login` VALUES ('chen', 'chen');
INSERT INTO `login` VALUES ('十元', 'shi');
INSERT INTO `login` VALUES ('夏目', 'xiamu');
INSERT INTO `login` VALUES ('尊', 'zun');
INSERT INTO `login` VALUES ('李明', '123456');
INSERT INTO `login` VALUES ('椿', 'chun');

-- ----------------------------
-- Table structure for product
-- ----------------------------
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product`  (
  `pr_id` char(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `pr_forms` char(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `pr_name` char(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `pr_pri` int(11) NOT NULL,
  `pr_num` int(11) NOT NULL,
  `pr_ad` char(40) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`pr_id`) USING BTREE,
  INDEX `pr_ad`(`pr_ad`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of product
-- ----------------------------
INSERT INTO `product` VALUES ('COAF-20181115001', 'ASUS', '华硕飞行堡垒', 6000, 200, '台湾台北');
INSERT INTO `product` VALUES ('COAF-20181115002', 'ASUS', '华硕飞行堡垒', 5000, 200, '台湾台北');
INSERT INTO `product` VALUES ('COAF-20181115003', 'ASUS', '华硕飞行堡垒', 5000, 200, '台湾台北');
INSERT INTO `product` VALUES ('COAW-20181115001', 'ASUS', '华硕顽石', 5000, 300, '台湾台北');
INSERT INTO `product` VALUES ('COAW-20181115002', 'ASUS', '华硕顽石', 6000, 200, '台湾台北');
INSERT INTO `product` VALUES ('COAW-20181115003', 'ASUS', '华硕顽石', 5000, 200, '台湾台北');
INSERT INTO `product` VALUES ('CODL-20181115001', 'DELL', '戴尔灵越', 5000, 200, '美国德克萨斯州朗德罗克');
INSERT INTO `product` VALUES ('CODL-20181115002', 'DELL', '戴尔灵越', 5000, 200, '美国德克萨斯州朗德罗克');
INSERT INTO `product` VALUES ('CODL-20181115003', 'DELL', '戴尔灵越', 5000, 200, '美国德克萨斯州朗德罗克');
INSERT INTO `product` VALUES ('CODY-20181115001', 'DELL', '戴尔游侠', 5000, 200, '美国德克萨斯州朗德罗克');
INSERT INTO `product` VALUES ('CODY-20181115002', 'DELL', '戴尔游侠', 5000, 200, '美国德克萨斯州朗德罗克');
INSERT INTO `product` VALUES ('COLZ-20181115001', 'LENOVO', '联想拯救者', 7999, 200, '中国北京/美国罗利');
INSERT INTO `product` VALUES ('COWL-20181115001', 'ALIENWARE', '外星人', 16999, 200, '美国迈阿密');
INSERT INTO `product` VALUES ('COWL-20181115002', 'ALIENWARE', '外星人', 26999, 200, '美国迈阿密');

-- ----------------------------
-- Table structure for purchase
-- ----------------------------
DROP TABLE IF EXISTS `purchase`;
CREATE TABLE `purchase`  (
  `pu_id` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `pu_date` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `pu_price` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `pu_number` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `s_id` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `pr_id` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `b_id` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`pu_id`) USING BTREE,
  INDEX `s_id`(`s_id`) USING BTREE,
  INDEX `pr_id`(`pr_id`) USING BTREE,
  INDEX `b_id`(`b_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of purchase
-- ----------------------------
INSERT INTO `purchase` VALUES ('PU11-COAF-20181115001', '20181115', '6000', '200', '1801101', 'COAF-20181115001', 'ASUSSU11');
INSERT INTO `purchase` VALUES ('PU11-COAF-20181115002', '20181115', '5000', '200', '1801102', 'COAF-20181115001', 'ASUSSU11');
INSERT INTO `purchase` VALUES ('PU11-COAF-20181115003', '20181115', '4000', '200', '1801102', 'COAF-20181115002', 'ASUSSU11');
INSERT INTO `purchase` VALUES ('PU11-COAF-20181115004', '20181115', '6000', '200', '1801101', 'COAF-20181115002', 'ASUSSU11');
INSERT INTO `purchase` VALUES ('PU11-COAW-20181115005', '20181115', '6000', '200', '1801203', 'COAW-20181115001', 'ASUSSU11');
INSERT INTO `purchase` VALUES ('PU11-COAW-20181115006', '20181115', '3000', '200', '1801101', 'COAW-20181115001', 'ALIESU22');
INSERT INTO `purchase` VALUES ('PU11-COAW-20181115007', '20181115', '6000', '200', '1801102', 'COAW-20181115003', 'ASUSSU11');
INSERT INTO `purchase` VALUES ('PU11-COAW-20181206001', '20181206', '2000', '200', '1801203', 'COAW-20181115003', 'ASUSSU11');
INSERT INTO `purchase` VALUES ('PU11-CODL-20181206002', '20181206', '2500', '200', '1801101', 'CODL-20181115001', 'DELLSU11');
INSERT INTO `purchase` VALUES ('PU11-CODL-20181206003', '20181206', '5000', '200', '1801101', 'CODL-20181115001', 'DELLSU11');
INSERT INTO `purchase` VALUES ('PU11-CODL-20181206004', '20181206', '6000', '200', '1801202', 'CODL-20181115002', 'DELLSU11');
INSERT INTO `purchase` VALUES ('PU11-CODY-20180308001', '20180308', '6000', '200', '1801203', 'CODY-20181115001', 'DELLSU11');
INSERT INTO `purchase` VALUES ('PU11-CODY-20180308002', '20180308', '7000', '200', '1801102', 'CODY-20181115001', 'DELLSU11');
INSERT INTO `purchase` VALUES ('PU11-CODY-20181206005', '20181206', '7000', '100', '1801101', 'CODY-20181115001', 'DELLSU11');
INSERT INTO `purchase` VALUES ('PU11-COLZ-20180308003', '20180308', '6000', '100', '1801201', 'COLZ-20181115001', 'LENOSU22');
INSERT INTO `purchase` VALUES ('PU11-COWL-20180308004', '20180308', '10000', '50', '1801203', 'COWL-20181115002', 'ALIESU22');
INSERT INTO `purchase` VALUES ('PU11-COWL-20180308005', '20180308', '10000', '50', '1801203', 'COWL-20181115002', 'ALIESU22');
INSERT INTO `purchase` VALUES ('PU11-COWL-20180308006', '20180308', '25000', '50', '1801203', 'COWL-20181115001', 'ALIESU22');
INSERT INTO `purchase` VALUES ('PU11-COWL-20180308007', '20180308', '10000', '50', '1801203', 'COWL-20181115002', 'ALIESU22');
INSERT INTO `purchase` VALUES ('PU11-COWL-20180308008', '20180308', '25000', '50', '1801203', 'COWL-20181115001', 'ALIESU22');
INSERT INTO `purchase` VALUES ('PU11-COWL-20180308009', '20180308', '10000', '50', '1801203', 'COWL-20181115002', 'ALIESU22');
INSERT INTO `purchase` VALUES ('PU11-COWL-20180308010', '20180308', '10000', '50', '1801203', 'COWL-20181115002', 'ALIESU22');
INSERT INTO `purchase` VALUES ('PU11-COWL-20181102001', '20180308', '10000', '50', '1801203', 'COWL-20181115002', 'ALIESU22');

-- ----------------------------
-- Table structure for sell
-- ----------------------------
DROP TABLE IF EXISTS `sell`;
CREATE TABLE `sell`  (
  `se_id` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `se_date` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `se_price` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `se_number` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `s_id` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `pr_id` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `d_id` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`se_id`) USING BTREE,
  INDEX `s_id`(`s_id`) USING BTREE,
  INDEX `pr_id`(`pr_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sell
-- ----------------------------
INSERT INTO `sell` VALUES ('SE11-COAF-20181115002', '20181115', '5000', '200', '1801102', 'COAF-20181115001', 'ASGHDE11');
INSERT INTO `sell` VALUES ('SE11-COAF-20181115003', '20181115', '5000', '200', '1802101', 'COAF-20181115002', 'ASGHDE11');
INSERT INTO `sell` VALUES ('SE11-COAF-20181115004', '20181115', '7000', '200', '1802101', 'COAF-20181115002', 'ASGHDE11');
INSERT INTO `sell` VALUES ('SE11-COAW-20181115005', '20181115', '7000', '200', '1802202', 'COAW-20181115001', 'ASGHDE11');
INSERT INTO `sell` VALUES ('SE11-COAW-20181115006', '20181115', '5000', '200', '1802102', 'COAW-20181115001', 'ALQLDE22');
INSERT INTO `sell` VALUES ('SE11-COAW-20181115007', '20181115', '7000', '200', '1802102', 'COAW-20181115003', 'ALQLDE22');
INSERT INTO `sell` VALUES ('SE11-COAW-20181206001', '20181206', '5000', '200', '1802202', 'COAW-20181115003', 'ALQLDE22');
INSERT INTO `sell` VALUES ('SE11-CODL-20181206002', '20181206', '5000', '200', '1802202', 'CODL-20181115001', 'ALQLDE22');
INSERT INTO `sell` VALUES ('SE11-CODL-20181206003', '20181206', '5000', '200', '1802202', 'CODL-20181115001', 'ASJDDE11');
INSERT INTO `sell` VALUES ('SE11-CODL-20181206004', '20181206', '7000', '200', '1802102', 'CODL-20181115002', 'ASJDDE11');
INSERT INTO `sell` VALUES ('SE11-CODY-20180308001', '20180308', '7000', '200', '1802203', 'CODY-20181115001', 'ASSNDE22');
INSERT INTO `sell` VALUES ('SE11-CODY-20180308002', '20180308', '7000', '200', '1802203', 'CODY-20181115001', 'ASSNDE22');
INSERT INTO `sell` VALUES ('SE11-CODY-20181206005', '20181206', '7000', '100', '1802102', 'CODY-20181115001', 'ASJDDE11');
INSERT INTO `sell` VALUES ('SE11-COLZ-20180308003', '20180308', '6000', '100', '1802203', 'COLZ-20181115001', 'ASSNDE22');
INSERT INTO `sell` VALUES ('SE11-COWL-20180308002', '20180308', '35000', '50', '1802201', 'COWL-20181115001', 'LEZXDE22');
INSERT INTO `sell` VALUES ('SE11-COWL-20180308004', '20180308', '15000', '50', '1802203', 'COWL-20181115002', 'DEXCDE11');
INSERT INTO `sell` VALUES ('SE11-COWL-20180308005', '20180308', '15000', '50', '1802203', 'COWL-20181115002', 'DEXCDE11');
INSERT INTO `sell` VALUES ('SE11-COWL-20180308006', '20180308', '35000', '50', '1802203', 'COWL-20181115001', 'DEXCDE11');
INSERT INTO `sell` VALUES ('SE11-COWL-20180308007', '20180308', '15000', '50', '1802203', 'COWL-20181115002', 'LELSDE22');
INSERT INTO `sell` VALUES ('SE11-COWL-20180308008', '20180308', '35000', '50', '1802201', 'COWL-20181115001', 'LELSDE22');
INSERT INTO `sell` VALUES ('SE11-COWL-20180308009', '20180308', '15000', '50', '1802201', 'COWL-20181115002', 'LELSDE22');
INSERT INTO `sell` VALUES ('SE11-COWL-20180308010', '20180308', '15000', '50', '1802201', 'COWL-20181115002', 'LEZXDE22');
INSERT INTO `sell` VALUES ('SE11-COWL-20181102001', '20180308', '15000', '50', '1802201', 'COWL-20181115002', 'LEZXDE22');
INSERT INTO `sell` VALUES ('SE55-COMP-20181115002', '2018-11-15', '100', '250', '1801101', 'COMP-20181115001', 'AKJHSU55');

-- ----------------------------
-- Table structure for staff
-- ----------------------------
DROP TABLE IF EXISTS `staff`;
CREATE TABLE `staff`  (
  `s_id` char(7) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `s_name` char(8) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `s_age` char(2) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `s_sex` char(2) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `s_tel` char(11) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `s_pos` char(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `s_sal` int(11) NOT NULL,
  `s_ad` char(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`s_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of staff
-- ----------------------------
INSERT INTO `staff` VALUES ('1801101', '张华', '37', '男', '15165238956', '采购一部经理', 10000, '成都');
INSERT INTO `staff` VALUES ('1801102', '李名为', '23', '男', '18145035956', '采购一部职员', 6000, '成都');
INSERT INTO `staff` VALUES ('1801201', '周九', '32', '女', '13514256523', '采购二部职员', 6000, '成都');
INSERT INTO `staff` VALUES ('1801202', '王丽', '26', '男', '15110254652', '采购二部职员', 5000, '成都');
INSERT INTO `staff` VALUES ('1801203', '陈天祥', '32', '女', '15102003236', '采购二部经理', 12000, '成都');
INSERT INTO `staff` VALUES ('1802101', '李家河', '35', '女', '18147452203', 'HR一部经理', 12000, '成都');
INSERT INTO `staff` VALUES ('1802102', '魏子华', '23', '女', '15142365897', 'HR一部职员', 5000, '成都');
INSERT INTO `staff` VALUES ('1802103', '姬无命', '22', '男', '17122487585', 'HR一部职员', 5000, '成都');
INSERT INTO `staff` VALUES ('1803101', '顾里', '35', '女', '13522001520', '销售一部经理', 9000, '成都');
INSERT INTO `staff` VALUES ('1803102', '卿青', '24', '男', '18142561235', '销售一部职员', 5000, '成都');
INSERT INTO `staff` VALUES ('1803103', '端木', '25', '女', '13586239825', '销售一部职员', 5000, '成都');
INSERT INTO `staff` VALUES ('1803201', '颜文里', '32', '男', '15156564123', '销售二部经理', 10000, '成都');
INSERT INTO `staff` VALUES ('1803202', '薛子文', '25', '女', '15111145236', '销售二部职员', 6000, '成都');
INSERT INTO `staff` VALUES ('1803203', '吴子凡', '26', '男', '13558654785', '销售二部职员', 5000, '成都');

-- ----------------------------
-- Table structure for supplier
-- ----------------------------
DROP TABLE IF EXISTS `supplier`;
CREATE TABLE `supplier`  (
  `b_id` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `b_name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `b_address` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `b_tel` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `b_person` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`b_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of supplier
-- ----------------------------
INSERT INTO `supplier` VALUES ('ALIESU22', 'Alienware', '美国迈阿密', '9867523', 'J.Thomson');
INSERT INTO `supplier` VALUES ('ASUSSU11', 'ASUS', '台湾台北', '5236413', '张轻');
INSERT INTO `supplier` VALUES ('DELLSU11', 'DELL', '美国德克萨斯州朗德罗克', '9532461', 'Eric Watson');
INSERT INTO `supplier` VALUES ('LENOSU22', 'LENOVO', '中国北京/美国罗利', '18180045263', '陈衍');

-- ----------------------------
-- View structure for v_purchase
-- ----------------------------
DROP VIEW IF EXISTS `v_purchase`;
CREATE ALGORITHM = UNDEFINED DEFINER = `root`@`localhost` SQL SECURITY DEFINER VIEW `v_purchase` AS select `purchase`.`pu_id` AS `pu_id`,`purchase`.`pu_date` AS `pu_date`,`purchase`.`pu_price` AS `pu_price`,`purchase`.`pu_number` AS `pu_number`,`purchase`.`s_id` AS `s_id`,`purchase`.`pr_id` AS `pr_id`,`purchase`.`b_id` AS `b_id` from `purchase`;

-- ----------------------------
-- View structure for v_sell
-- ----------------------------
DROP VIEW IF EXISTS `v_sell`;
CREATE ALGORITHM = UNDEFINED DEFINER = `root`@`localhost` SQL SECURITY DEFINER VIEW `v_sell` AS select `sell`.`se_id` AS `se_id`,`sell`.`se_date` AS `se_date`,`sell`.`se_price` AS `se_price`,`sell`.`se_number` AS `se_number`,`sell`.`s_id` AS `s_id`,`sell`.`pr_id` AS `pr_id`,`sell`.`b_id` AS `b_id` from `sell`;

SET FOREIGN_KEY_CHECKS = 1;
