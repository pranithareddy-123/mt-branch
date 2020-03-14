package com.cts.ipo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
	import org.springframework.web.bind.annotation.PostMapping;
	import org.springframework.web.bind.annotation.PutMapping;
	import org.springframework.web.bind.annotation.RequestBody;
	import org.springframework.web.bind.annotation.RequestMapping;
	import org.springframework.web.bind.annotation.RestController;
    import com.cts.ipo.dao.IPORepository;
    import com.cts.ipo.pojos.IPO;


@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/ipo")  
	public class IPOController {
		@Autowired
		private IPORepository ipoRepository;
		
		
		@GetMapping("/getAllIpo")
		public Iterable<IPO> getAllIpo()
		{
			return ipoRepository.findAll();
		}
	@PostMapping("/saveIpo")
	public IPO saveIpo(@RequestBody IPO ipo)
	{
	System.out.println(ipo);
ipoRepository.save(ipo);
	return ipo;

	}
	@PutMapping("/updateIpo/{id}")
	public IPO updateIpo(@RequestBody IPO ipo, @PathVariable("id")Integer id)
	{
		ipo.setId(id);
	System.out.println(ipo);
    ipoRepository.save(ipo);
	
	return ipo;
	}
	@DeleteMapping("/deleteIpo/{id}")
	public boolean deleteIpo( @PathVariable("id") Integer id)

	{
		ipoRepository.deleteById(id);
	return true;
	}

	@GetMapping("/find4/{id}")

	public IPO find4
	( @PathVariable("id")Integer id)
	{
	Optional<IPO> ipo=ipoRepository.findById(id);
	return ipo.get();
	}

	@GetMapping("/findByCompanyName/{companyName}")
public List<IPO> findByCompanyName(@PathVariable("companyName") String companyName)

{

 List<IPO> ipo = ipoRepository.findByCompanyName(companyName);

 return ipo;







	 }




	
	}







