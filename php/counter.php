<?php

$html = '
    <div class="page-wrapper">
        <section class="page single-review" itemtype="http://schema.org/Review" itemscope="" itemprop="review">
            <article class="review clearfix">
                <div class="review-content">
                    <div class="review-text" itemprop="reviewBody">
                    Outstanding ... 
                    </div>
                </div>
            </article>
        </section>
    </div>
';

$classname = 'review-text';
$dom = new DOMDocument;
$dom->loadHTML($html);
$xpath = new DOMXPath($dom);
$results = $xpath->query("//*[@class='" . $classname . "']");

if ($results->length > 0) {
    echo $review = $results->item(0)->nodeValue;
}

?>