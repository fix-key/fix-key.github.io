// 获取成功后将数据暂存
let arr_db = []
// 匹配成功后的数组
let arr_match = []
// 截取的数组
let arr_slice = []

// 发送 ajax 请求
$.ajax({
    // url
    url: 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json',
    // 请求类型
    type: 'GET',
    // 响应体结果
    dataType: 'json',
    // 成功的回调
    success: function (data) {
        // init(data);

        // 只获取 100 条
        arr_db = data.slice(0, 100);
        arr_match = arr_db;
        // 截取 5 条数据
        arr_slice = arr_match.slice(0, 5);

        // 调用分页条和数据渲染函数
        pagination()
    },
    // 超时时间
    timeout: 2000,
    // 失败的回调
    error: function () {
        alert('出错啦!!');
    },
});

// 数据渲染
function init(data) {

    // 初始化
    $('#city').val('')
    $('.info_wrap').html('');
    $('.search_box').remove();

    // 获取每条数据，并进行渲染
    $.each(data, (i, n) => {
        $('.info_wrap').append(`
            <li>
                <p class="info_wrap_title">城市-${n.city}</p>
                <section class="info_city">
                    2000 - 2013 城市增长度：${n.growth_from_2000_to_2013} <br>
                    所处经度：${n.latitude} <br>
                    所处增量：${n.longitude} <br>
                    人口数：${n.population} <br>
                    城市排名：${n.rank} <br>
                    所属州/省：${n.state}
                </section>
            </li>
        `)
    })

}

// 搜索功能
function search() {
    // 点击图标（图片）进行搜索
    $('#search_ico').on('click', function () {
        if ($('#city').val().trim()) {
            if (arr_match.length != 0) {
                // 有数据就渲染数据和搜索框 
                pagination();
            } else {
                // 没有数据，则显示提示语（暂无相关搜索）
                $('.info_wrap').html(`<p class="info_null">暂无相关搜索</p>`);
            }

        } else {
            // 如果没有数据，则全部匹配全部
            arr_match = arr_db;
            pagination();
            // $('.info_wrap').html(`<p class="info_null">暂无相关搜索</p>`);
        }
    })

    // 键盘事件，根据键盘输入的字符检索数据
    $('#city').on('keyup', (e) => {
        // 判断搜索框是否有数据
        if ($('#city').val().trim()) {
            // 先清空
            arr_match = [];
            $('.search_box').stop().remove();

            // 再渲染
            $('.search').append(`<ul class='search_box'></ul>`)

            // 判断是否匹配到数据
            $.each(arr_db, (i, n) => {
                if (n.city.toUpperCase().indexOf($('#city').val().toUpperCase().trim()) != -1 || n.state.toUpperCase().indexOf($('#city').val().toUpperCase().trim()) != -1) {
                    arr_match.push(n)
                    $('.search_box').append(`<li>${n.city}, ${n.state}</li>`);
                    $('.search_box').stop().hide();
                }
            })

            // 鼠标离开就让搜索提示框消失
            $('.search_box').stop().slideDown(function () {
                $('.search_box').on('mouseleave', function () {
                    $('.search_box').stop().slideUp().remove();
                })
            });



            // 判断是否检索到数据
            if (arr_match.length != 0) {
                $('.search_box').on('click', 'li', function () {
                    arr_match = [arr_match[$(this).index()]];
                    pagination();
                })

            } else {
                arr_match = []
                $('.search_box').stop().remove();
                $('.pagination').stop().remove();
                // $('.info_wrap').html(`<p class="info_null">暂无相关搜索</p>`);
            }
        } else {
            $('.search_box').stop().slideUp(function () {
                $('.search_box').stop().remove();
            })

        }

        // 回车搜索
        if (e.keyCode === 13) {
            $('#search_ico').click();
        }
    })


}

search();

// 分页条
function pagination() {

    // 当前页数
    let page_now = 1;
    // 总页数
    let page_count = Math.ceil(arr_match.length / 5);
    // 截取5个数据
    // arr_slice = arr_match.slice((page_now - 1) * 5, page_now * 5);
    // 存放页码的数组
    let arr_page = [];

    // 渲染数据
    // init(arr_slice);

    // 添加页码
    for (let i = 1; i <= page_count; i++) {
        arr_page.push(i);
    }

    // 先清除之前的页码条
    $('.pagination').stop(true).remove();
    // 添加页码条
    if (arr_match.length > 5) {
        $('.pagination_bar').append(`
            <section class="pagination">
                <p class='prev'>上一个</p>
                <span class="active">1</span>
                <span>2</span>
                <span>3</span>
                <p class='next'>下一个</p>
                <a>共 ${page_count} 页</a>
                <a>let go: <input type="text" id="go"/></a>
            </section>
            
        `)

        // 添加点击事件
        PageClick();
        // 跳转指定页数
        LetGo();
    } else {
        $('.pagination').stop(true).remove();
    }

    // 调用该方法，动态渲染数据和页码条
    init_pagination();

    // 动态添加点击事件
    function PageClick() {
        // 点击上一页
        $('.prev').on('click', function () {
            if (page_now > 1) {
                page_now--;
                init_pagination();
            }

        })

        // 点击下一页
        $('.next').on('click', function () {
            if (page_now < page_count) {
                page_now++;
                init_pagination();
            }

        })

        // 点击跳转页数
        $('.pagination').on('click', 'span', function () {
            page_now = $(this).html()
            arr_slice = arr_match.slice((page_now - 1) * 5, page_now * 5)
            init(arr_slice)

            $('.pagination span').removeClass('active');
            $(this).addClass('active');
        })
    }

    // 跳转到指定页面
    function LetGo() {
        // 正则匹配 个位数[1-9] 个位数后的位数[0-9]
        let regNum = /^[1-9][0-9]*$/

        // 键盘事件
        $('#go').on('keyup', function (e) {
            // 判断是否回车
            if (e.keyCode === 13) {
                // 判断是否有内容
                if ($('#go').val().trim()) {
                    // 判断是否数值
                    if (regNum.test($('#go').val())) {
                        // 页数不能大于总页数
                        if (page_count >= parseInt($('#go').val())) {
                            page_now = parseInt($('#go').val());
                            init_pagination();
                        } else {
                            $('#go').val('');
                            alert(`没有该页数, 您可以输入大于 0, 并且小于 ${page_count} 页内的数值`);
                        }

                    } else {
                        $('#go').val('');
                        alert('请输入 0 以上的正整数');
                    }

                } else {
                    alert('请输入内容！');
                }
            }

        })

    }

    // 数据和页码条渲染
    function init_pagination() {
        // 截取5条数据
        arr_slice = arr_match.slice((page_now - 1) * 5, page_now * 5);

        // 渲染数据
        init(arr_slice);

        // 第几个页码条
        page_num = Math.ceil(page_now / 3);
        // console.log(page_num);

        // 截取3个页码
        let arr_page_slice = arr_page.slice((page_num - 1) * 3, page_num * 3);
        // console.log(arr_page_slice);

        // 渲染分页条
        // 动态生成 span 标签
        $('.pagination span').remove();
        for (var i = 0; i < arr_page_slice.length; i++) {
            $('.pagination p.prev').after('<span></span>');
        }

        // 给当前页码添加样式
        $('.pagination span').removeClass('active');
        $.each($('.pagination span'), (i, n) => {
            $('.pagination span').eq(i).text(arr_page_slice[i]);

            if (page_now == arr_page_slice[i]) {
                $('.pagination span').eq(i).addClass('active');
            }

        })

        // 清空数据
        $('#go').val('');
    }
}

pagination();


// 点击其他地方，将搜索提示框隐藏
// $(window).click(function () {
//     $('.search_box').remove();
// })