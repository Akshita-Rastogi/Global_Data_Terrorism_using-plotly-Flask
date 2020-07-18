import pandas as pd
from function import filter
def filter1(year,month,day,country,region,attacktype):
	d={}
	data=filter(year,month,day,country,region,attacktype)
	for i,j in data.items():
		l=[]
		for k in j.values():
			l.append(k)
		d[i]=l
		return d