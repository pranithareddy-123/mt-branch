package com.cts.stockprice.pojos;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name="stockprice")
public class StockPrice {
	
	
String companyCode;
@Id
String stockExchange;
Integer currentPrice;
String date;
String time;
String uploadfile;
public String getDate() {
	return date;
}
public void setDate(String date) {
	this.date = date;
}
public String getTime() {
	return time;
}
public void setTime(String time) {
	this.time = time;
}


public String getUploadfile() {
	return uploadfile;
}
public void setUploadfile(String uploadfile) {
	this.uploadfile = uploadfile;
}
@Override
public String toString() {
	return "StockPrice [companyCode=" + companyCode + ", stockExchange=" + stockExchange + ", currentPrice="
			+ currentPrice + ", date=" + date + ", time=" + time + ", uploadfile=" + uploadfile + "]";
}
public String getCompanyCode() {
	return companyCode;
}
public void setCompanyCode(String companyCode) {
	this.companyCode = companyCode;
}
public String getStockExchange() {
	return stockExchange;
}
public void setStockExchange(String stockExchange) {
	this.stockExchange = stockExchange;
}
public Integer getCurrentPrice() {
	return currentPrice;
}
public void setCurrentPrice(Integer currentPrice) {
	this.currentPrice = currentPrice;
}

}
