$(function(){
	//#####土木建築学科メニュー制御#####
	//本サイトと開発サイトでページID変わるので注意
	//頭のaをspanに変更
	$('.page-item-3088').children('a').wrap('<span class="ep_site"></span>');
	$('.page-item-3088 span a').contents().unwrap();
	//子のli内aをtarget="_blank"に
	$('.page-item-3088 ul a').prop('target','_blank');

	//#####機械数理工学科メニュー制御#####
	//本サイトと開発サイトでページID変わるので注意
	//頭のaをspanに変更
	$('.page-item-3096').children('a').wrap('<span class="ep_site"></span>');
	$('.page-item-3096 span a').contents().unwrap();
	//子のli内aをtarget="_blank"に
	$('.page-item-3096 ul a').prop('target','_blank');


	//#####材料・応用化学科メニュー制御#####
	//本サイトと開発サイトでページID変わるので注意
	//頭のaをspanに変更
	$('.page-item-3049').children('a').wrap('<span class="ep_site"></span>');
	$('.page-item-3049 span a').contents().unwrap();
	//子のli内aをtarget="_blank"に
	$('.page-item-3049 ul a').prop('target','_blank');

	//#####ニュースレターかけはしメニュー制御#####
	//頭のaをspanに変更
	$('.sub_column.newsletter > .sub_nav > ul > li > ul > li').children('a').wrap('<span></span>');
	$('.sub_column.newsletter > .sub_nav > ul > li > ul > li > span > a').contents().unwrap();
});
