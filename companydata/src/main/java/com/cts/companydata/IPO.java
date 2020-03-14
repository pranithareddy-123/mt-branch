package com.cts.companydata;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name="ipo")
public class IPO {
	@Id
	Integer id;
	String companyName;
	String stockExchange;
	Integer priceperShare;
	Integer totalnumberofShares;
	String remarks;
	
	String opendatetime;

	@Override
	public String toString() {
		return "IPO [id=" + id + ", companyName=" + companyName + ", stockExchange=" + stockExchange
				+ ", priceperShare=" + priceperShare + ", totalnumberofShares=" + totalnumberofShares + ", remarks="
				+ remarks + ", opendatetime=" + opendatetime + "]";
	}

	public String getRemarks() {
		return remarks;
	}

	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	public String getStockExchange() {
		return stockExchange;
	}

	public void setStockExchange(String stockExchange) {
		this.stockExchange = stockExchange;
	}

	public Integer getPriceperShare() {
		return priceperShare;
	}

	public void setPriceperShare(Integer priceperShare) {
		this.priceperShare = priceperShare;
	}

	public Integer getTotalnumberofShares() {
		return totalnumberofShares;
	}

	public void setTotalnumberofShares(Integer totalnumberofShares) {
		this.totalnumberofShares = totalnumberofShares;
	}

	public String getOpendatetime() {
		return opendatetime;
	}

	public void setOpendatetime(String opendatetime) {
		this.opendatetime = opendatetime;
	}
	}