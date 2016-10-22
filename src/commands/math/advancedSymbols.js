LatexCmds.measuredangle = bind(VanillaSymbol,'\\measuredangle ','&#8737;');

//other symbols with the same LaTeX command and HTML character entity reference
LatexCmds.Alpha =
LatexCmds.Beta =
LatexCmds.Gamma =
LatexCmds.Delta =
LatexCmds.Epsilon =
LatexCmds.Zeta =
LatexCmds.Eta =
LatexCmds.Theta =
LatexCmds.Iota =
LatexCmds.Kappa =
LatexCmds.Lambda =
LatexCmds.Mu =
LatexCmds.Nu =
LatexCmds.Xi =
LatexCmds.Pi =
LatexCmds.Rho =
LatexCmds.Sigma =
LatexCmds.Tau =
LatexCmds.Phi =
LatexCmds.Chi =
LatexCmds.Psi =
LatexCmds.Omega =
LatexCmds.forall = P(VanillaSymbol, function(_, _super) {
  _.init = function(latex) {
    _super.init.call(this,'\\'+latex+' ','&'+latex+';');
  };
});

// extra latex commands
LatexCmds.Cap = bind(VanillaSymbol, "\\Cap", "&#x22D3;");
LatexCmds.Cup = bind(VanillaSymbol, "\\Cup", "&#x22D2;");
LatexCmds.notequiv = bind(VanillaSymbol, "\\not\\equiv", "&#x2262;");
LatexCmds.nsim = bind(VanillaSymbol, "\\nsim", "&#x2241;");
LatexCmds.approxeq = bind(VanillaSymbol, "\\approxeq", "&#x224A;");
LatexCmds.nless = bind(VanillaSymbol, "\\nless", "&#x226E;");
LatexCmds.ngtr = bind(VanillaSymbol, "\\ngtr", "&#x226F;");
LatexCmds.nparallel = bind(VanillaSymbol, "\\nparallel", "&#x2226;");
LatexCmds.nexists = bind(VanillaSymbol, "\\nexists", "&#x2204;");
LatexCmds.And = bind(VanillaSymbol, "\\And", "&amp;");
LatexCmds.Rrightarrow = bind(VanillaSymbol, "\\Rrightarrow", "&#x21DB;");
LatexCmds.Lleftarrow = bind(VanillaSymbol, "\\Lleftarrow", "&#x21DA;");
LatexCmds.nRightarrow = bind(VanillaSymbol, "\\nRightarrow", "&#x21CF;");
LatexCmds.nLeftarrow = bind(VanillaSymbol, "\\nLeftarrow", "&#x21CD;");
LatexCmds.nLeftrightarrow = bind(VanillaSymbol, "\\nLeftrightarrow", "&#x21CE;");

LatexCmds.hyphen = bind(VanillaSymbol, '\\hyphen ', '&#x2010;');
LatexCmds.oint = bind(VanillaSymbol, '\\oint ', '&#8750;');
LatexCmds.bigcap = bind(VanillaSymbol, '\\bigcap ', '&#8745;');
LatexCmds.bigcup = bind(VanillaSymbol, '\\bigcup ', '&#8746;');
LatexCmds.bigsqcup = bind(VanillaSymbol, '\\bigsqcup ', '&#8852;');
LatexCmds.bigvee = bind(VanillaSymbol, '\\bigvee ', '&#8744;');
LatexCmds.bigwedge = bind(VanillaSymbol, '\\bigwedge ', '&#8743;');
LatexCmds.bigodot = bind(VanillaSymbol, '\\bigodot ', '&#8857;');
LatexCmds.bigotimes = bind(VanillaSymbol, '\\bigotimes ', '&#8855;');
LatexCmds.bigoplus = bind(VanillaSymbol, '\\bigoplus ', '&#8853;');
LatexCmds.biguplus = bind(VanillaSymbol, '\\biguplus ', '&#8846;');
