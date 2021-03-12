Ext.data.JsonP.GeoExt_data_serializer_ImageWMS({"tagname":"class","name":"GeoExt.data.serializer.ImageWMS","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"ImageWMS.js","href":"ImageWMS.html#GeoExt-data-serializer-ImageWMS"}],"aliases":{},"alternateClassNames":[],"extends":"GeoExt.data.serializer.Base","mixins":["GeoExt.mixin.SymbolCheck"],"requires":[],"uses":[],"members":[{"name":"symbols","tagname":"property","owner":"GeoExt.data.serializer.ImageWMS","id":"property-symbols","meta":{}},{"name":"_checked","tagname":"property","owner":"GeoExt.mixin.SymbolCheck","id":"static-property-_checked","meta":{"private":true,"static":true}},{"name":"sourceCls","tagname":"property","owner":"GeoExt.data.serializer.ImageWMS","id":"static-property-sourceCls","meta":{"static":true}},{"name":"onClassMixedIn","tagname":"method","owner":"GeoExt.mixin.SymbolCheck","id":"method-onClassMixedIn","meta":{"private":true}},{"name":"check","tagname":"method","owner":"GeoExt.mixin.SymbolCheck","id":"static-method-check","meta":{"static":true}},{"name":"checkSymbol","tagname":"method","owner":"GeoExt.mixin.SymbolCheck","id":"static-method-checkSymbol","meta":{"private":true,"static":true}},{"name":"isDefinedSymbol","tagname":"method","owner":"GeoExt.mixin.SymbolCheck","id":"static-method-isDefinedSymbol","meta":{"private":true,"static":true}},{"name":"normalizeSymbol","tagname":"method","owner":"GeoExt.mixin.SymbolCheck","id":"static-method-normalizeSymbol","meta":{"private":true,"static":true}},{"name":"register","tagname":"method","owner":"GeoExt.data.serializer.Base","id":"static-method-register","meta":{"protected":true,"static":true}},{"name":"serialize","tagname":"method","owner":"GeoExt.data.serializer.ImageWMS","id":"static-method-serialize","meta":{"static":true}},{"name":"validateSource","tagname":"method","owner":"GeoExt.data.serializer.Base","id":"static-method-validateSource","meta":{"protected":true,"static":true}}],"code_type":"ext_define","id":"class-GeoExt.data.serializer.ImageWMS","component":false,"superclasses":["Ext.Base","GeoExt.data.serializer.Base"],"subclasses":[],"mixedInto":[],"parentMixins":["GeoExt.mixin.SymbolCheck"],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Base<div class='subclass '><a href='#!/api/GeoExt.data.serializer.Base' rel='GeoExt.data.serializer.Base' class='docClass'>GeoExt.data.serializer.Base</a><div class='subclass '><strong>GeoExt.data.serializer.ImageWMS</strong></div></div></div><h4>Mixins</h4><div class='dependency'><a href='#!/api/GeoExt.mixin.SymbolCheck' rel='GeoExt.mixin.SymbolCheck' class='docClass'>GeoExt.mixin.SymbolCheck</a></div><h4>Inherited mixins</h4><div class='dependency'><a href='#!/api/GeoExt.mixin.SymbolCheck' rel='GeoExt.mixin.SymbolCheck' class='docClass'>GeoExt.mixin.SymbolCheck</a></div><h4>Files</h4><div class='dependency'><a href='source/ImageWMS.html#GeoExt-data-serializer-ImageWMS' target='_blank'>ImageWMS.js</a></div></pre><div class='doc-contents'><p>A serializer for layers that have an <code>ol.source.ImageWMS</code> source.</p>\n</div><div class='members'><div class='members-section'><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Instance properties</h3><div id='property-symbols' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.serializer.ImageWMS'>GeoExt.data.serializer.ImageWMS</span><br/><a href='source/ImageWMS.html#GeoExt-data-serializer-ImageWMS-property-symbols' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.serializer.ImageWMS-property-symbols' class='name expandable'>symbols</a> : String[]<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'><p><debug></p>\n<p>Defaults to: <code>[&#39;ol.layer.Layer#getOpacity&#39;, &#39;ol.source.ImageWMS&#39;, &#39;ol.source.ImageWMS#getUrl&#39;, &#39;ol.source.ImageWMS#getParams&#39;]</code></p><p>Overrides: <a href=\"#!/api/GeoExt.mixin.SymbolCheck-property-symbols\" rel=\"GeoExt.mixin.SymbolCheck-property-symbols\" class=\"docClass\">GeoExt.mixin.SymbolCheck.symbols</a></p></div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static properties</h3><div id='static-property-_checked' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/GeoExt.mixin.SymbolCheck' rel='GeoExt.mixin.SymbolCheck' class='defined-in docClass'>GeoExt.mixin.SymbolCheck</a><br/><a href='source/SymbolCheck.html#GeoExt-mixin-SymbolCheck-static-property-_checked' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.mixin.SymbolCheck-static-property-_checked' class='name expandable'>_checked</a> : Object<span class=\"signature\"><span class='private' >private</span><span class='static' >static</span></span></div><div class='description'><div class='short'>An object that we will use to store already looked up references in. ...</div><div class='long'><p>An object that we will use to store already looked up references in.</p>\n\n<p>The key will be a symbol (after it has been normalized by the\nmethod <a href=\"#!/api/GeoExt.mixin.SymbolCheck-static-method-normalizeSymbol\" rel=\"GeoExt.mixin.SymbolCheck-static-method-normalizeSymbol\" class=\"docClass\">normalizeSymbol</a>), and the value will be a boolean indicating\nif the symbol was found to be defined when it was checked.</p>\n<p>Defaults to: <code>{}</code></p></div></div></div><div id='static-property-sourceCls' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.serializer.ImageWMS'>GeoExt.data.serializer.ImageWMS</span><br/><a href='source/ImageWMS.html#GeoExt-data-serializer-ImageWMS-static-property-sourceCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.serializer.ImageWMS-static-property-sourceCls' class='name expandable'>sourceCls</a> : ol.source.Source<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'><p>The ol.source.Source class that this serializer will serialize.</p>\n</div><div class='long'><p>The ol.source.Source class that this serializer will serialize.</p>\n<p>Overrides: <a href=\"#!/api/GeoExt.data.serializer.Base-static-property-sourceCls\" rel=\"GeoExt.data.serializer.Base-static-property-sourceCls\" class=\"docClass\">GeoExt.data.serializer.Base.sourceCls</a></p></div></div></div></div></div><div class='members-section'><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Instance methods</h3><div id='method-onClassMixedIn' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/GeoExt.mixin.SymbolCheck' rel='GeoExt.mixin.SymbolCheck' class='defined-in docClass'>GeoExt.mixin.SymbolCheck</a><br/><a href='source/SymbolCheck.html#GeoExt-mixin-SymbolCheck-method-onClassMixedIn' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.mixin.SymbolCheck-method-onClassMixedIn' class='name expandable'>onClassMixedIn</a>( <span class='pre'>cls</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Whenever a class mixes in GeoExt.mixin.SymbolCheck, this method will be\ncalled and it actually runs the checks for al...</div><div class='long'><p>Whenever a class mixes in <a href=\"#!/api/GeoExt.mixin.SymbolCheck\" rel=\"GeoExt.mixin.SymbolCheck\" class=\"docClass\">GeoExt.mixin.SymbolCheck</a>, this method will be\ncalled and it actually runs the checks for all the defined <a href=\"#!/api/GeoExt.mixin.SymbolCheck-property-symbols\" rel=\"GeoExt.mixin.SymbolCheck-property-symbols\" class=\"docClass\">symbols</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cls</span> : Ext.Class<div class='sub-desc'><p>The class that this mixin is mixed into.</p>\n</div></li></ul></div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static methods</h3><div id='static-method-check' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/GeoExt.mixin.SymbolCheck' rel='GeoExt.mixin.SymbolCheck' class='defined-in docClass'>GeoExt.mixin.SymbolCheck</a><br/><a href='source/SymbolCheck.html#GeoExt-mixin-SymbolCheck-static-method-check' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.mixin.SymbolCheck-static-method-check' class='name expandable'>check</a>( <span class='pre'>cls</span> )<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Checks whether the required symbols of the given class are defined\nin the global context. ...</div><div class='long'><p>Checks whether the required symbols of the given class are defined\nin the global context. Will log to the console if a symbol cannot be\nfound.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cls</span> : Ext.Base<div class='sub-desc'><p>An ext class defining a property <code>symbols</code> that\n    that this method will check.</p>\n</div></li></ul></div></div></div><div id='static-method-checkSymbol' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/GeoExt.mixin.SymbolCheck' rel='GeoExt.mixin.SymbolCheck' class='defined-in docClass'>GeoExt.mixin.SymbolCheck</a><br/><a href='source/SymbolCheck.html#GeoExt-mixin-SymbolCheck-static-method-checkSymbol' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.mixin.SymbolCheck-static-method-checkSymbol' class='name expandable'>checkSymbol</a>( <span class='pre'>symbolStr, [clsName]</span> )<span class=\"signature\"><span class='private' >private</span><span class='static' >static</span></span></div><div class='description'><div class='short'>Checks the passed symbolStr and raises a warning if it cannot be\nfound. ...</div><div class='long'><p>Checks the passed symbolStr and raises a warning if it cannot be\nfound.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>symbolStr</span> : String<div class='sub-desc'><p>A string to check. Usually this string has\n    been <a href=\"#!/api/GeoExt.mixin.SymbolCheck-static-method-normalizeSymbol\" rel=\"GeoExt.mixin.SymbolCheck-static-method-normalizeSymbol\" class=\"docClass\">normalized</a> already.</p>\n</div></li><li><span class='pre'>clsName</span> : String (optional)<div class='sub-desc'><p>The optional name of the class that\n    requires the passed openlayers symbol.</p>\n</div></li></ul></div></div></div><div id='static-method-isDefinedSymbol' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/GeoExt.mixin.SymbolCheck' rel='GeoExt.mixin.SymbolCheck' class='defined-in docClass'>GeoExt.mixin.SymbolCheck</a><br/><a href='source/SymbolCheck.html#GeoExt-mixin-SymbolCheck-static-method-isDefinedSymbol' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.mixin.SymbolCheck-static-method-isDefinedSymbol' class='name expandable'>isDefinedSymbol</a>( <span class='pre'>symbolStr</span> ) : Boolean<span class=\"signature\"><span class='private' >private</span><span class='static' >static</span></span></div><div class='description'><div class='short'>Checks if the passed symbolStr is defined. ...</div><div class='long'><p>Checks if the passed symbolStr is defined.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>symbolStr</span> : String<div class='sub-desc'><p>A string to check. Usually this string has\n    been <a href=\"#!/api/GeoExt.mixin.SymbolCheck-static-method-normalizeSymbol\" rel=\"GeoExt.mixin.SymbolCheck-static-method-normalizeSymbol\" class=\"docClass\">normalized</a> already.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>Whether the symbol is defined or not.</p>\n</div></li></ul></div></div></div><div id='static-method-normalizeSymbol' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/GeoExt.mixin.SymbolCheck' rel='GeoExt.mixin.SymbolCheck' class='defined-in docClass'>GeoExt.mixin.SymbolCheck</a><br/><a href='source/SymbolCheck.html#GeoExt-mixin-SymbolCheck-static-method-normalizeSymbol' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.mixin.SymbolCheck-static-method-normalizeSymbol' class='name expandable'>normalizeSymbol</a>( <span class='pre'>symbolStr</span> ) : String<span class=\"signature\"><span class='private' >private</span><span class='static' >static</span></span></div><div class='description'><div class='short'>Normalizes a short form of a symbol to a canonical one we use to\nstore the results of the isDefinedSymbol method. ...</div><div class='long'><p>Normalizes a short form of a symbol to a canonical one we use to\nstore the results of the <a href=\"#!/api/GeoExt.mixin.SymbolCheck-static-method-isDefinedSymbol\" rel=\"GeoExt.mixin.SymbolCheck-static-method-isDefinedSymbol\" class=\"docClass\">isDefinedSymbol</a> method. The following two\nnormalizations take place:</p>\n\n<ul>\n<li>A <code>#</code> in the symbol is being replaced with <code>.prototype.</code> so that\ne.g. the symbol <code>'ol.Class#methodName'</code> turns into the symbol\n<code>'ol.Class.prototype.methodName'</code></li>\n<li>A <code>::</code> in the symbol is being replaced with <code>.</code> so that\ne.g. the symbol <code>'ol.Class::staticMethodName'</code> turns into the\nsymbol <code>'ol.Class.staticMethodName'</code></li>\n</ul>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>symbolStr</span> : String<div class='sub-desc'><p>A string to normalize.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>The normalized string.</p>\n</div></li></ul></div></div></div><div id='static-method-register' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/GeoExt.data.serializer.Base' rel='GeoExt.data.serializer.Base' class='defined-in docClass'>GeoExt.data.serializer.Base</a><br/><a href='source/Base.html#GeoExt-data-serializer-Base-static-method-register' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.serializer.Base-static-method-register' class='name expandable'>register</a>( <span class='pre'>subCls</span> )<span class=\"signature\"><span class='protected' >protected</span><span class='static' >static</span></span></div><div class='description'><div class='short'>Given a subclass of GeoExt.data.serializer.Base, register the class\nwith the GeoExt.data.MapfishPrintProvider. ...</div><div class='long'><p>Given a subclass of <a href=\"#!/api/GeoExt.data.serializer.Base\" rel=\"GeoExt.data.serializer.Base\" class=\"docClass\">GeoExt.data.serializer.Base</a>, register the class\nwith the <a href=\"#!/api/GeoExt.data.MapfishPrintProvider\" rel=\"GeoExt.data.MapfishPrintProvider\" class=\"docClass\">GeoExt.data.MapfishPrintProvider</a>. This method is usually\ncalled inside the 'after-create' function of <code>Ext.class</code> definitions.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>subCls</span> : <a href=\"#!/api/GeoExt.data.serializer.Base\" rel=\"GeoExt.data.serializer.Base\" class=\"docClass\">GeoExt.data.serializer.Base</a><div class='sub-desc'><p>The class to register.</p>\n</div></li></ul></div></div></div><div id='static-method-serialize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.serializer.ImageWMS'>GeoExt.data.serializer.ImageWMS</span><br/><a href='source/ImageWMS.html#GeoExt-data-serializer-ImageWMS-static-method-serialize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.serializer.ImageWMS-static-method-serialize' class='name expandable'>serialize</a>( <span class='pre'>layer, source, viewRes</span> ) : Object<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Serializes the passed source and layer into an object that the\nMapfish Print Servlet understands. ...</div><div class='long'><p>Serializes the passed source and layer into an object that the\nMapfish Print Servlet understands.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>layer</span> : ol.layer.Layer<div class='sub-desc'><p>The layer to serialize.</p>\n\n\n\n</div></li><li><span class='pre'>source</span> : ol.source.Source<div class='sub-desc'><p>The source of the layer to\n   serialize.</p>\n\n\n\n</div></li><li><span class='pre'>viewRes</span> : Number<div class='sub-desc'><p>The resolution of the mapview.</p>\n\n\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>A serialized representation of source and layer.</p>\n\n\n\n</div></li></ul><p>Overrides: <a href=\"#!/api/GeoExt.data.serializer.Base-static-method-serialize\" rel=\"GeoExt.data.serializer.Base-static-method-serialize\" class=\"docClass\">GeoExt.data.serializer.Base.serialize</a></p></div></div></div><div id='static-method-validateSource' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/GeoExt.data.serializer.Base' rel='GeoExt.data.serializer.Base' class='defined-in docClass'>GeoExt.data.serializer.Base</a><br/><a href='source/Base.html#GeoExt-data-serializer-Base-static-method-validateSource' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.serializer.Base-static-method-validateSource' class='name expandable'>validateSource</a>( <span class='pre'>source</span> )<span class=\"signature\"><span class='protected' >protected</span><span class='static' >static</span></span></div><div class='description'><div class='short'>Given a concrete ol.source.Source instance, this method checks if\nthe non-abstract subclass is capable of serializing...</div><div class='long'><p>Given a concrete <code>ol.source.Source</code> instance, this method checks if\nthe non-abstract subclass is capable of serializing the source. Will\nthrow an exception if the source isn't valid for the serializer.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>source</span> : ol.source.Source<div class='sub-desc'><p>The source to test.</p>\n\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});