jawa.namespace(jawa, 'monad');

jawa.monad.TailQueue = newClass({template: function (cls) {
	var Recorder = newClass({template: function(cls) {
		def(cls, 'init', function() {
			this.list = [];
			this.state = 'off';  // on | off
		});
		
		def(cls, 'turnOn', function() {
			this.state = 'on';
		});
		
		def(cls, 'turnOff', function() {
			this.state = 'off';
		});
	
		def(cls, 'recordOne', function(l) {
			if (this.state == 'off') { return; }
			this.list = l.concat(this.list);
			this.turnOff();
		});
		
		def(cls, 'getData', function() {
			return this.list;
		});
	}});
	
	def(cls, 'init', function() {
 		this.q = [];
		this.state = 'off';  // on | off
		this.recorder = new Recorder();
		this.numOfThreads = 1;
		this.id = jawa.getVersion();
		this.endEvent = new jawa.CustomEvent();
	});
	
	def(cls, 'append', function(fn) {
		this.q.push(fn);
		return this.run();
	});
	
	def(cls, 'empty', function() {
		return this.q.length == 0;
	});
	
	def(cls, 'cleanUpThread', function() {
		this.recorder.turnOn();
		this.deltaNumOfThreads(-1);
	});
	
	def(cls, 'deltaNumOfThreads', function(delta) {
		this.numOfThreads += delta;
		if (this.numOfThreads == 0) {
			this.endEvent.fire();
		}
	});
	
	def(cls, 'run', function() {
		if (this.state == 'on') { return; }
		this.state = 'on';
		while(true) {
			var fn = this.q.pop();
			if (jawa.util.isNull(fn)) { 
				this.state = 'off';
				return this.recorder.getData(); 
			}
			this.recorder.recordOne(fn());
		}
	});
}});

jawa.monad.TailQueueStack = newClass({template: function(cls) {
	def(cls, 'init', function() {
		this.stack = [];
	});
	
	def(cls, 'top', function() {
		return this.stack[0];
	});
	
	def(cls, 'push', function() {
		this.stack.unshift(new jawa.monad.TailQueue());
	});
	
	def(cls, 'pop', function() {
		var top = this.top();
		top.recorder.turnOn();
		top.numOfThreads--;
		if (top.numOfThreads == 0) {
			this.stack.shift();
			return true;
		} else {
			return false;
		}
	});
}});
