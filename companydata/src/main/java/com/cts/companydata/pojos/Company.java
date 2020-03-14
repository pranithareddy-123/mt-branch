package com.cts.companydata.pojos;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;

//import org.springframework.data.annotation.Transient;

import com.cts.companydata.IPO;

@Entity
@Table(name="company")
public class Company {
	
	
	
	@Id
    String companyName;
	Integer turnOver;
	String ceo;
	String boardOfDirectors;
	Integer listinstockExchange;
	String sector;
	String brief;
	String stockCode;
	
	@Transient
List<IPO>ipoList;
	public List<IPO> getIpoList() {
		return ipoList;
	}
	public void setIpoList(List<IPO> ipoList) {
		this.ipoList = ipoList;
	}
	
	public String getCompanyName() {
		return companyName;
	}
	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}
	public Integer getTurnOver() {
		return turnOver;
	}
	public void setTurnOver(Integer turnOver) {
		this.turnOver = turnOver;
	}
	public String getCeo() {
		return ceo;
	}
	public void setCeo(String ceo) {
		this.ceo = ceo;
	}
	public String getBoardOfDirectors() {
		return boardOfDirectors;
	}
	public void setBoardOfDirectors(String boardOfDirectors) {
		this.boardOfDirectors = boardOfDirectors;
	}
	public Integer getListinstockExchange() {
		return listinstockExchange;
	}
	public void setListinstockExchange(Integer listinstockExchange) {
		this.listinstockExchange = listinstockExchange;
	}
	public String getSector() {
		return sector;
	}
	public void setSector(String sector) {
		this.sector = sector;
	}
	public String getBrief() {
		return brief;
	}
	public void setBrief(String brief) {
		this.brief = brief;
	}
	public String getStockCode() {
		return stockCode;
	}
	public void setStockCode(String stockCode) {
		this.stockCode = stockCode;
	}
	@Override
	public String toString() {
		return "Company [ companyName=" + companyName + ", turnOver=" + turnOver + ", ceo=" + ceo
				+ ", boardOfDirectors=" + boardOfDirectors + ", listinstockExchange=" + listinstockExchange
				+ ", sector=" + sector + ", brief=" + brief + ", stockCode=" + stockCode + "]";
	}
	
	}