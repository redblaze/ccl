
require 'fileutils'

class Build

  attr_accessor :jsFileName

  def initialize
      self.jsFileName = 'main'
  end 

  def clean
    if File.exist?("build")
      FileUtils.rm_r("build")
    end
  end

  def makeBuildDir
=begin
    FileUtils.mkdir_p("build/chrome/content/xul");
    FileUtils.mkdir_p("build/chrome/content/js");
    FileUtils.mkdir_p("build/chrome/locale");
    FileUtils.mkdir_p("build/chrome/skin");
=end
    
    FileUtils.mkdir_p("build/");
  end

  def copyFiles
    FileUtils.cp_r("chrome.manifest", "build");
    FileUtils.cp_r("install.rdf", "build");
    FileUtils.cp_r("chrome/locale", "build/chrome");
    FileUtils.cp_r("chrome/skin", "build/chrome");
    FileUtils.cp_r("chrome/content/xul", "build/chrome/content");
  end

  def matchAll(regex, str)
    matchData = str.match(regex);
    res = [];
    while(matchData) 
      res.push(matchData);
      matchData = matchData.post_match.match(regex);
    end
    return res;
  end

  def mergeJS
    file = File.new("main.html");
    content = file.read;

    r = /<script src="(.+?)"><\/script>/;

    jsFiles = matchAll(r, content);
    
    mergedJS = "var ccl = (function() { ";
    jsFiles.each{|path|
      jsFile = File.new(path[1]);
      content = jsFile.read;
      mergedJS += content;
      jsFile.close;
    };
    mergedJS += "return ccl; })()";
    
    file.close;

    mergedJS
  end

  def copyJS
    file = File.new("build/ccl.js", "w+")
    file.write(mergeJS)
    file.close
  end

  def compressJS
    target = "build/ccl_minified.js"
    source = "build/ccl.js"
    command = "java -jar c:/chiyan/work/tools/yuicompressor-2.4.2.jar -o " + target + " " + source
    system(command)
  end

  def modifyOverlayXUL
    file = File.new("build/chrome/content/xul/overlay.xul", "r")
    content = file.read
    file.close
    
    FileUtils.rm_r("build/chrome/content/xul/overlay.xul")
    
    file = File.new("build/chrome/content/xul/overlay.xul", "w")
    r = /<!-- begin javascript inclusion -->((.|\r|\n)*)<!-- end javascript inclusion -->/
    file.write(content.sub!(r, '<script type="application/javascript" src="chrome://xpath_finder/content/js/' + self.jsFileName + '.js"/>'))
    file.close
  end

  def zip
    p 'zip'
    # zipExe = "c:/Program Files/WinRAR/WinRAR.exe"
    zipExe = '"c:\Program Files\WinRAR\WinRAR.exe"'
    FileUtils.cd("build")
    command = zipExe + " a -afzip -r xf.xpi ./*.*"
    p command
    system(command)
  end

  def self.run(entry)
    b = self.new
    b.clean
    b.makeBuildDir
    b.copyJS
    b.compressJS

=begin 
    b.clean
    b.makeBuildDir
    b.copyFiles
    b.copyJS
    # b.compressJS
    b.modifyOverlayXUL
    b.zip
=end
    
  end
end

Build.run(ARGV[0]);
