package com.shubh.companyservice.application.mapper;

import java.util.Arrays;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.stereotype.Component;

import com.shubh.companyservice.application.dto.*;
import com.shubh.companyservice.application.models.*;

@Component
public class IpoMapper 
{
	public IpoDTO mapToIpoDTO(Ipo ipo) 
	{
		ModelMapper mapper = new ModelMapper();
		mapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		IpoDTO IpoDTO = mapper.map(ipo, IpoDTO.class);
		return IpoDTO;
	}
	
	public Ipo mapToIpo(IpoDTO IpoDTO) 
	{
		ModelMapper mapper = new ModelMapper();
		mapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		Ipo ipo = mapper.map(IpoDTO, Ipo.class);
		return ipo;
	}
	
	public List<IpoDTO> mapToIpoDTOs(List<Ipo> ipos)
	{
		ModelMapper mapper = new ModelMapper();
		mapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		List<IpoDTO> IpoDTOs = Arrays.asList(mapper.map(ipos, IpoDTO[].class));
		return IpoDTOs;
	}
}
