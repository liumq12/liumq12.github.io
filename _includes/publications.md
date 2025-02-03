<h1 id="publications"></h1>

<!-- In Preparation Section -->
<h2 style="margin: 60px 0px -15px;">
  In Preparation
</h2>

<div class="publications">
  <ul style="position: relative; padding-right: 15px; padding-left: 15px;">
    <li style="font-size: 1.1em; margin: 10px 0; padding: 2px;">
      Liu and Barbot, <em>(Under Review).</em> Role of hydrothermal alteration and thermally activated healing for seismic swarms generation along slow oceanic transform faults
    </li>
    <li style="font-size: 1.1em; margin: 10px 0; padding: 2px;">
      Liu et al., <em>(In Preparation).</em> Lithology, friction, and fault dynamics: a physical framework for Southern California seismicity
    </li>
  </ul>
</div>

<!-- Selected Publications Section -->
<h2 style="margin: 60px 0px -15px;">
  Selected publications 
  <span style="font-size: 15px;">
    [<a href="https://scholar.google.com/citations?user=kEc2UMgAAAAJ&hl=en" target="_blank" style="font-size: 15px;">Google Scholar</a>]
  </span>
</h2>

<div class="publications">
<ol class="bibliography">

{% for link in site.data.publications.main %}

<li>
  <div class="pub-row">
    <div class="col-sm-3 abbr" style="position: relative; padding-right: 15px; padding-left: 15px;">
      <img src="{{ link.image }}" class="teaser img-fluid z-depth-1 zoomable" 
           style="width=100;height=40%; object-fit: cover; cursor: pointer; border-radius: 5px;" 
           onclick="openModal('{{ link.image }}')">
      <abbr class="badge">{{ link.journal_short }}</abbr>
    </div>
    <div class="col-sm-9" style="position: relative; padding-right: 15px; padding-left: 20px;">
        <div class="title"><a href="{{ link.pdf }}" target="_blank">{{ link.title }}</a></div>
        <div class="author">{{ link.authors }}</div>
        <div class="periodical"><em>{{ link.journal }}</em></div>
    </div>
  </div>
</li>

<br>

{% endfor %}

</ol>
</div>