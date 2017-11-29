/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */
"document"in self&&("classList"in document.createElement("_")&&(!document.createElementNS||"classList"in document.createElementNS("http://www.w3.org/2000/svg","g"))||function(a){
	if("Element"in a){
		a=a.Element.prototype;
		var h=Object,
		l=String.prototype.trim||function(){
			return this.replace(/^\s+|\s+$/g,"")},
		n=Array.prototype.indexOf||function(c){
			for(var b=0,k=this.length;b<k;b++)
				if(b in this&&this[b]===c)
					return b;
			return-1},
		f=function(c,b){
			this.name=c;
			this.code=DOMException[c];
			this.message=b},
			e=function(c,b){
				if(""===b)throw new f("SYNTAX_ERR","The token must not be empty.");
				if(/\s/.test(b))throw new f("INVALID_CHARACTER_ERR","The token must not contain space characters.");
				return n.call(c,b)},
				g=function(c){
					var b=l.call(c.getAttribute("class")||"");
					b=b?b.split(/\s+/):[];
					for(var k=0,e=b.length;k<e;k++)
						this.push(b[k]);
					this._updateClassName=function(){
						c.setAttribute("class",this.toString())}},
				d=g.prototype=[],
				m=function(){
					return new g(this)};
				f.prototype=Error.prototype;
				d.item=function(c){
					return this[c]||null};
				d.contains=function(c){
					return!~e(this,c+"")};
				d.add=function(){
					var c=arguments,
					b=0,
					k=c.length,
					d=!1;
					do{var a=c[b]+"";
					~e(this,a)&&(this.push(a),d=!0)}
				while(++b<k);
				d&&this._updateClassName()};
			d.remove=function(){
				var c=arguments,
				b=0,
				d=c.length,
				a=!1,
				f;
				do{var g=c[b]+"";
				for(f=e(this,g);
					~f;)
				this.splice(f,1),
				a=!0,
				f=e(this,g)}
			while(++b<d);
			a&&this._updateClassName()};
		d.toggle=function(c,b){
			var a=this.contains(c),
			d=a?!0!==b&&"remove":!1!==b&&"add";
			if(d)this[d](c);
			return!0===b||!1===b?b:!a};
		d.replace=function(c,b){
			var a=e(c+"");
			~a&&(this.splice(a,1,b),
				this._updateClassName())};
		d.toString=function(){
			return this.join(" ")};
		if(h.defineProperty){
			d={
				get:m,enumerable:!0,configurable:!0};
			try{
				h.defineProperty(a,"classList",d)}
			catch(c){
				if(void 0===c.number||-2146823252===c.number)
					d.enumerable=!1,
					h.defineProperty(a,"classList",d)}}
		else h.prototype.__defineGetter__&&a.__defineGetter__("classList",m)}}
	(self),function(){
		var a=document.createElement("_");
		a.classList.add("c1","c2");
		if(!a.classList.contains("c2")){
			var h=function(a){
				var f=DOMTokenList.prototype[a];
				DOMTokenList.prototype[a]=function(a){
					var e,
					d=arguments.length;
					for(e=0;e<d;e++)
						a=arguments[e],
						f.call(this,a)}};
			h("add");
			h("remove")}
		a.classList.toggle("c3",!1);
		if(a.classList.contains("c3")){
			var l=DOMTokenList.prototype.toggle;
			DOMTokenList.prototype.toggle=function(a,f){
				return 1 in arguments&&!this.contains(a)===!f?f:l.call(this,a)}}
		"replace"in document.createElement("_").classList||(DOMTokenList.prototype.replace=function(a,f){
			var e=this.toString().split(" "),
			g=e.indexOf(a+"");
			~g&&(e=e.slice(g),
				this.remove.apply(this,e),
				this.add(f),
				this.add.apply(this,e.slice(1)))});
		a=null}());