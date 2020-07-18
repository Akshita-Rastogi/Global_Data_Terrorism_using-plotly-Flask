from flask import Flask, render_template, flash, request
import pandas as pd
import plotly.express as px
import plotly.offline
import webbrowser
from threading import Timer

app = Flask(__name__)


    
    

@app.route('/login', methods=['post', 'get'])
def login():
    message = 'Done'
    if request.method == 'GET':
        year = request.args.get('year',type=int)  # access the data inside 
        month = request.args.get('month',type=int)
        day = request.args.get('day',type=int)
        region = request.args.get('region',type=int)
        country = request.args.get('country',type=int)
        attacktype = request.args.get('attacktype',type=int)
        df=pd.read_csv("dataset.csv")
        f=(df['iyear']==year)&(df['imonth']==month)&(df['iday']==day)&(df['country']==country)&(df['region']==region)&(df['attacktype1']==attacktype)
        data=df[f]
        data=data.to_dict()
        d={}
        for key,value in data.items():
        	b=len(value.values())
        	d[key]=list(value.values())

        d1 = dict(list(d.items())[len(d)//2:])
        d2 = dict(list(d.items())[:len(d)//2])

        return render_template('index1.html',d1=d1,d2=d2,b=b)

@app.route('/')
def index():
   return render_template("index.html")

@app.route('/templates/map4.html')
def map4():
   return render_template("map4.html")

@app.route('/templates/map2.html')
def map2():
   return render_template("map2.html")

@app.route('/templates/image.html')
def image():
   return render_template("image.html")


def open_browser():
      webbrowser.open_new('http://127.0.0.1:5000/')

@app.route('/mapping', methods=['post', 'get'])
def mapping():
    message = 'Done'
    if request.method == 'GET':
        region = request.args.get('region',type=int)
        country = request.args.get('country',type=int)
        attacktype = request.args.get('attacktype',type=str)
        df=pd.read_csv("map.csv")
        if region == 0 and country ==0 and attacktype=='All': #000
        	data=df
        elif region == 0 and country ==0 :                      #001 
        	f=(df['attacktype1_txt']==attacktype)
        	data=df[f]
        elif region == 0 and attacktype=='All' :                 #010
        	f=(df['country']==country)
        	data=df[f]
        elif region == 0:                #0 11
        	f=(df['country']==country)&(df['attacktype1_txt']==attacktype)
        	data=df[f]
        elif country == 0 and attacktype=='All' :                #1 00
        	f=(df['region']==country)
        	data=df[f]
        elif country==0 :                #1 01
        	f=(df['region']==country)&(df['attacktype1_txt']==attacktype)
        	data=df[f]
        elif attacktype=='All' :                #1 10
        	f=(df['country']==country)&(df['region']==region)
        	data=df[f]
        else :                #1 11
        	f=(df['country']==country)&(df['region']==region)&(df['attacktype1_txt']==attacktype)
        	data=df[f]

        fig = px.density_mapbox(data,lat='latitude',lon='longitude',radius=5,zoom=4,mapbox_style='open-street-map')
        plotly.offline.plot(fig, filename='templates/names.html')

        return render_template('names.html')


if __name__ == '__main__':
	Timer(1, open_browser).start();
	app.run(debug = True)


