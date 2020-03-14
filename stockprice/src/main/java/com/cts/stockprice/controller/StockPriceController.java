package com.cts.stockprice.controller;

import java.io.File;

import java.io.FileInputStream;

import java.io.IOException;

import java.nio.file.Files;

import java.nio.file.Path;

import java.nio.file.Paths;

import java.util.ArrayList;

import java.util.HashMap;

import java.util.Iterator;

import java.util.List;

import java.util.Map;

import java.util.Optional;



import javax.servlet.http.HttpSession;



import org.apache.poi.ss.usermodel.Cell;

import org.apache.poi.ss.usermodel.Row;

import org.apache.poi.xssf.usermodel.XSSFSheet;

import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;

import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.DeleteMapping;

import org.springframework.web.bind.annotation.GetMapping;



import org.springframework.web.bind.annotation.PathVariable;



import org.springframework.web.bind.annotation.PostMapping;



import org.springframework.web.bind.annotation.PutMapping;



import org.springframework.web.bind.annotation.RequestBody;



import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RequestParam;

import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.multipart.MultipartFile;


import com.cts.stockprice.dao.StockPriceRepository;
import com.cts.stockprice.pojos.StockPrice;

//import io.micrometer.core.instrument.MultiGauge.Row;
@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/stockprice")
public class StockPriceController {
@Autowired
 private StockPriceRepository stockPriceRepository;
@GetMapping("/getAllStockprice")
 public Iterable<StockPrice> getAllstockprice()
{ return stockPriceRepository.findAll();
 }
@PostMapping("/saveStockprice")
public StockPrice saveStockprice(@RequestBody StockPrice stockprice)
{
	System.out.println(stockprice);
stockPriceRepository.save(stockprice);
return stockprice;
}
@PutMapping("/updateStockprice/{companyCode}")
public StockPrice updateStockPrice(@RequestBody StockPrice stockprice, @PathVariable("companyCode")String companyCode)

{
 stockprice.setCompanyCode(companyCode);
System.out.println(stockprice);
stockPriceRepository.save(stockprice);
return stockprice;
}
@DeleteMapping("/deleteStockprice/{companyCode}")
public boolean deleteStockprice( @PathVariable("companyCode") String companyCode)

{
	
	stockPriceRepository.deleteById(companyCode);
return true;
}

@GetMapping("/find1/{companyCode}")

public StockPrice find1( @PathVariable("companyCode")String companyCode)
{
Optional<StockPrice> stockprice=stockPriceRepository.findById(companyCode);
return stockprice.get();
}
@RequestMapping("/multiplelinechart")

public ResponseEntity<?> getDataForMultipleLine() {

Iterable<StockPrice> dataList = stockPriceRepository.findAll();

Map<String, List<StockPrice>> mappedData = new HashMap<>();

List<StockPrice> stockPriceList = new ArrayList<StockPrice>();

dataList.forEach(stockPriceList::add);

for (StockPrice data : stockPriceList) {
if (mappedData.containsKey(data.getCompanyCode())) {
mappedData.get(data.getCompanyCode()).add(data);
} else {
List<StockPrice> tempList = new ArrayList<StockPrice>();
tempList.add(data);
mappedData.put(data.getCompanyCode(), tempList);

 }



}

return new ResponseEntity<>(mappedData, HttpStatus.OK);

}



@PostMapping("/uploadfile/{companyCode}")



public int handleFileUpload(@PathVariable("companyCode") String companyCode,
		@RequestParam("file") MultipartFile file, HttpSession session) {



Path rootLocation = Paths.get("c://temp//"+file.getOriginalFilename());

try {

 Files.write(rootLocation,file.getBytes());





 try



   {



    FileInputStream fileNew = new FileInputStream(new File("c://temp//"+file.getOriginalFilename()));







    //Create Workbook instance holding reference to .xlsx file



    XSSFWorkbook workbook = new XSSFWorkbook(fileNew);







    //Get first/desired sheet from the workbook



    XSSFSheet sheet = workbook.getSheetAt(0);









    //Iterate through each rows one by one



    Iterator<Row> rowIterator = sheet.iterator();



    while (rowIterator.hasNext())



    {



     Row row = rowIterator.next();







     StockPrice stockPrice=new StockPrice();

     //For each row, iterate through all the columns



     Cell cell0= row.getCell(0);

           //System.out.println(""+cell0.getStringCellValue());

     stockPrice.setCompanyCode(cell0.getStringCellValue());

     Cell cell1= row.getCell(1);

           //System.out.println(""+cell1.getStringCellValue());

     stockPrice.setCompanyCode(cell1.getStringCellValue());

     Cell cell2= row.getCell(2);

     if(cell2.getCellType()==cell2.CELL_TYPE_STRING) {

           //System.out.println(""+cell2.getStringCellValue());

     stockPrice.setCurrentPrice(Integer.parseInt(cell2.getStringCellValue()));

     }

     else if(cell2.getCellType()==cell2.CELL_TYPE_NUMERIC) {

           //System.out.println(""+cell2.getNumericCellValue());

     stockPrice.setCurrentPrice((int)cell2.getNumericCellValue());

     }

     Cell cell3= row.getCell(3);

     //System.out.println(""+cell3.getStringCellValue());

     stockPrice.setDate(cell3.getStringCellValue());

     Cell cell4= row.getCell(4);

     if(cell4.getCellType()==cell4.CELL_TYPE_STRING) {

           // System.out.println(""+cell4.getStringCellValue());

     stockPrice.setTime(cell4.getStringCellValue());

     }



     else if(cell4.getCellType()==cell4.CELL_TYPE_NUMERIC) {

      //System.out.println(""+cell4.getNumericCellValue());

      stockPrice.setTime(""+cell4.getNumericCellValue());

     }

     System.out.println("----------------------------------------------------------");

     stockPrice.setUploadfile(file.getOriginalFilename());

     stockPriceRepository.save(stockPrice);

    }



    fileNew.close();



   }



   catch (Exception e)



   {



    e.printStackTrace();



   }















} catch (IOException e) {

 // TODO Auto-generated catch block

 e.printStackTrace();

}







return 1;



}



}






