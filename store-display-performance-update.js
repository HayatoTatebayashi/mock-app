// パフォーマンスデータ生成
function generateMockPerformanceData() {
  const facility = 'Minn 日本橋';
  const performanceData = [];

  // 前月平均データ（基準値）
  const previousMonthAvg = {
    google: 8,
    booking: 12,
    expedia: 6,
    tripcom: 10,
    agoda: 8,
    rakuten: 15,
    jalan: 13,
    airbnb: 5
  };

  // 過去14日分のデータを生成（1日1レコード）
  for (let i = 0; i < 14; i++) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    const dateStr = date.toLocaleDateString('ja-JP');

    const record = {
      date: dateStr,
      facility: facility,
      trustYouPerformance: Math.floor(Math.random() * 30) + 70, // 70-100
      lowRatingCount: Math.floor(Math.random() * 5), // 0-5件
      sites: {
        google: {
          actual: Math.floor(Math.random() * 10),
          diff: Math.floor(Math.random() * 10) - previousMonthAvg.google
        },
        booking: {
          actual: Math.floor(Math.random() * 15),
          diff: Math.floor(Math.random() * 15) - previousMonthAvg.booking
        },
        expedia: {
          actual: Math.floor(Math.random() * 8),
          diff: Math.floor(Math.random() * 8) - previousMonthAvg.expedia
        },
        tripcom: {
          actual: Math.floor(Math.random() * 12),
          diff: Math.floor(Math.random() * 12) - previousMonthAvg.tripcom
        },
        agoda: {
          actual: Math.floor(Math.random() * 10),
          diff: Math.floor(Math.random() * 10) - previousMonthAvg.agoda
        },
        rakuten: {
          actual: Math.floor(Math.random() * 18),
          diff: Math.floor(Math.random() * 18) - previousMonthAvg.rakuten
        },
        jalan: {
          actual: Math.floor(Math.random() * 16),
          diff: Math.floor(Math.random() * 16) - previousMonthAvg.jalan
        },
        airbnb: {
          actual: Math.floor(Math.random() * 6),
          diff: Math.floor(Math.random() * 6) - previousMonthAvg.airbnb
        }
      }
    };

    performanceData.push(record);
  }

  return performanceData;
}

function formatDiff(diff) {
  if (diff > 0) return `+${diff}`;
  return `${diff}`;
}

function getDiffColor(diff) {
  if (diff > 0) return 'text-red-600';
  if (diff < 0) return 'text-blue-600';
  return 'text-gray-600';
}

function renderPerformanceData() {
  const performanceData = generateMockPerformanceData();
  const tbody = document.getElementById('performance-tbody');

  if (!tbody) return;

  tbody.innerHTML = performanceData.map((record, idx) => {
    const perfScore = record.trustYouPerformance;
    const bgColor = idx % 2 === 0 ? 'bg-blue-50' : 'bg-white';

    return `
      <tr class="hover:bg-gray-100 transition-colors ${bgColor}">
        <td class="px-3 py-2 whitespace-nowrap text-xs text-gray-900 border-r border-gray-200 sticky left-0 z-10 ${bgColor}">${record.date}</td>
        <td class="px-3 py-2 whitespace-nowrap text-xs font-medium text-gray-900 border-r border-gray-200 sticky left-[100px] z-10 ${bgColor}">${record.facility}</td>
        <td class="px-3 py-2 whitespace-nowrap text-center text-xs text-gray-900 border-r border-gray-200">${perfScore}</td>
        <td class="px-3 py-2 whitespace-nowrap text-center text-xs text-gray-900 border-r border-gray-200">${record.lowRatingCount}</td>

        <!-- Google -->
        <td class="px-2 py-2 whitespace-nowrap text-center text-xs text-gray-900 border-r border-gray-200">${record.sites.google.actual}</td>
        <td class="px-2 py-2 whitespace-nowrap text-center text-xs ${getDiffColor(record.sites.google.diff)} border-r border-gray-200">${formatDiff(record.sites.google.diff)}</td>

        <!-- Booking.com -->
        <td class="px-2 py-2 whitespace-nowrap text-center text-xs text-gray-900 border-r border-gray-200">${record.sites.booking.actual}</td>
        <td class="px-2 py-2 whitespace-nowrap text-center text-xs ${getDiffColor(record.sites.booking.diff)} border-r border-gray-200">${formatDiff(record.sites.booking.diff)}</td>

        <!-- Expedia -->
        <td class="px-2 py-2 whitespace-nowrap text-center text-xs text-gray-900 border-r border-gray-200">${record.sites.expedia.actual}</td>
        <td class="px-2 py-2 whitespace-nowrap text-center text-xs ${getDiffColor(record.sites.expedia.diff)} border-r border-gray-200">${formatDiff(record.sites.expedia.diff)}</td>

        <!-- trip.com -->
        <td class="px-2 py-2 whitespace-nowrap text-center text-xs text-gray-900 border-r border-gray-200">${record.sites.tripcom.actual}</td>
        <td class="px-2 py-2 whitespace-nowrap text-center text-xs ${getDiffColor(record.sites.tripcom.diff)} border-r border-gray-200">${formatDiff(record.sites.tripcom.diff)}</td>

        <!-- Agoda -->
        <td class="px-2 py-2 whitespace-nowrap text-center text-xs text-gray-900 border-r border-gray-200">${record.sites.agoda.actual}</td>
        <td class="px-2 py-2 whitespace-nowrap text-center text-xs ${getDiffColor(record.sites.agoda.diff)} border-r border-gray-200">${formatDiff(record.sites.agoda.diff)}</td>

        <!-- Rakuten Travel -->
        <td class="px-2 py-2 whitespace-nowrap text-center text-xs text-gray-900 border-r border-gray-200">${record.sites.rakuten.actual}</td>
        <td class="px-2 py-2 whitespace-nowrap text-center text-xs ${getDiffColor(record.sites.rakuten.diff)} border-r border-gray-200">${formatDiff(record.sites.rakuten.diff)}</td>

        <!-- Jalan.net -->
        <td class="px-2 py-2 whitespace-nowrap text-center text-xs text-gray-900 border-r border-gray-200">${record.sites.jalan.actual}</td>
        <td class="px-2 py-2 whitespace-nowrap text-center text-xs ${getDiffColor(record.sites.jalan.diff)} border-r border-gray-200">${formatDiff(record.sites.jalan.diff)}</td>

        <!-- Airbnb -->
        <td class="px-2 py-2 whitespace-nowrap text-center text-xs text-gray-900 border-r border-gray-200">${record.sites.airbnb.actual}</td>
        <td class="px-2 py-2 whitespace-nowrap text-center text-xs ${getDiffColor(record.sites.airbnb.diff)}">${formatDiff(record.sites.airbnb.diff)}</td>
      </tr>
    `;
  }).join('');

  // 表示件数を更新
  const displayedCount = document.getElementById('performance-displayed-count');
  if (displayedCount) {
    displayedCount.textContent = performanceData.length;
  }
}
